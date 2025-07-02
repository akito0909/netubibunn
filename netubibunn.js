// --- シミュレーションパラメータ ---
const alpha = 0.01; // 熱拡散率 (alpha)
const L = 1.0;      // 棒の長さ (メートル)
const nx = 50;      // 空間方向の分割数 (点の数 = nx+1)
const dx = L / nx;  // 空間刻み幅 (Delta x)

// 時間刻み幅 (dt) は安定性のために小さく保つ
// r = alpha * dt / (dx * dx) <= 0.5 が安定条件
const dt = 0.0005; // 小さなdtを維持

const r = alpha * dt / (dx * dx); // 安定性パラメータ
console.log("Stability parameter r:", r.toFixed(4)); // rの値を確認 (0.5以下推奨)

const totalSimulationTime = 20; // シミュレーション終了時間
let currentTime = 0; // 現在のシミュレーション時間

// --- 新しい設定: 1フレームあたりに進めるシミュレーションステップ数 ---
const stepsPerFrame = 50; // 1フレームあたり50ステップ計算を進める

// 温度配列 u[i] は x[i] における温度
let u = new Array(nx + 1).fill(0);
let u_new = new Array(nx + 1).fill(0);
// 初期温度を保存する配列 (t=0の曲線描画用)
let u_initial = new Array(nx + 1).fill(0);

// --- 初期条件の設定 ---
// これらは定数として保持し、initializeTemperature()内で使用
const TEMP_HIGH = 80;
const TEMP_LOW = 20;
const TEMP_MIDDLE = 50;


// DOM要素の取得
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timeCounter = document.getElementById('timeCounter');
const temperatureGraph = document.getElementById('temperatureGraph');
const currentTemperatureCurve = document.getElementById('currentTemperatureCurve');
const initialTemperatureCurve = document.getElementById('initialTemperatureCurve');
const initialTemperatureLabel = document.getElementById('initialTemperatureLabel');
const diagramBar = document.getElementById('diagramBar');
// ラジオボタンの要素を取得
const tempOption1 = document.getElementById('tempOption1');
const tempOption2 = document.getElementById('tempOption2');
const tempOption3 = document.getElementById('tempOption3');
const tempOption4 = document.getElementById('tempOption4');

const graphDrawingWidthPixels = 300;
const graphHeight = 200;
const maxTemp = 100; // グラフのY軸最大温度 (物理的な最大温度)
const minTemp = 20;  // グラフのY軸最小温度 (物理的な最小温度)
const tempRange = maxTemp - minTemp;

let animationFrameId;

// --- 関数定義 ---

function getColorFromTemperature(temp) {
    const normalizedTemp = Math.max(0, Math.min(1, (temp - minTemp) / tempRange));
    const hue = (1 - normalizedTemp) * 240; // 0 (高温) から 240 (低温)
    return `hsl(${hue}, 100%, 50%)`;
}

// グラフを更新する関数
function updateGraph(drawInitial = false) {
    let pathData = "M ";
    const dataToDraw = drawInitial ? u_initial : u;

    for (let i = 0; i <= nx; i++) {
        const x_pixel = (i / nx) * graphDrawingWidthPixels;
        const y_pixel = graphHeight - ((dataToDraw[i] - minTemp) / tempRange) * graphHeight;
        pathData += `${x_pixel},${y_pixel} `;
    }

    if (drawInitial) {
        initialTemperatureCurve.setAttribute('d', pathData);
        initialTemperatureLabel.setAttribute('x', graphDrawingWidthPixels + 10);
        initialTemperatureLabel.setAttribute('y', 35);
    } else {
        currentTemperatureCurve.setAttribute('d', pathData);
    }
}

function updateDiagramBar() {
    while (diagramBar.firstChild) {
        diagramBar.removeChild(diagramBar.firstChild);
    }

    for (let i = 0; i < nx; i++) {
        const segment = document.createElement('div');
        segment.classList.add('diagram-segment');
        // u[i]とu[i+1]の中間点の温度で色を決定する
        const averageTemp = (u[i] + u[i+1]) / 2;
        segment.style.backgroundColor = getColorFromTemperature(averageTemp);
        diagramBar.appendChild(segment);
    }
}

function calculateHeatConduction() {
    for (let i = 1; i < nx; i++) {
        u_new[i] = r * (u[i + 1] + u[i - 1]) + (1 - 2 * r) * u[i];
    }
    for (let i = 1; i < nx; i++) {
        u[i] = u_new[i];
    }
}

function animate() {
    let shouldContinue = true;
    for (let i = 0; i < stepsPerFrame; i++) {
        if (currentTime + dt > totalSimulationTime) {
            currentTime = totalSimulationTime;
            shouldContinue = false;
            break;
        }
        calculateHeatConduction();
        currentTime += dt;
    }

    updateGraph(false);
    updateDiagramBar();
    timeCounter.textContent = `t : ${currentTime.toFixed(2)}`;

    if (shouldContinue) {
        animationFrameId = requestAnimationFrame(animate);
    } else {
        cancelAnimationFrame(animationFrameId);
        startButton.textContent = '開始';
        startButton.disabled = false;
    }
}

// 新しい初期温度設定ロジック
function setInitialConditionsBasedOnSelection() {
    // 全体を初期温度でリセット
    for (let i = 0; i <= nx; i++) {
        u[i] = 0; // 一旦全て0にする
        u_initial[i] = 0;
    }

    if (tempOption1.checked) {
        // オプション1: 均一な高温 & 両端低温
        for (let i = 0; i <= nx; i++) {
            u[i] = TEMP_HIGH;
            u_initial[i] = TEMP_HIGH;
        }
        u[0] = TEMP_LOW;
        u[nx] = TEMP_LOW;
        u_initial[0] = TEMP_LOW;
        u_initial[nx] = TEMP_LOW;
    } else if (tempOption2.checked) {
        // オプション2: 左端高温 & 右端低温 & その他は中間
        for (let i = 0; i <= nx; i++) {
            u[i] = TEMP_MIDDLE; // 全体を中間温度で初期化
            u_initial[i] = TEMP_MIDDLE;
        }
        u[0] = TEMP_HIGH; // 左端を高温
        u[nx] = TEMP_LOW;  // 右端を低温
        u_initial[0] = TEMP_HIGH;
        u_initial[nx] = TEMP_LOW;
    } else if (tempOption3.checked) {
        // オプション3: 中央高温 & 両端低温
        for (let i = 0; i <= nx; i++) {
            u[i] = TEMP_LOW; // 全体を低温で初期化
            u_initial[i] = TEMP_LOW;
        }
        // 中央部分を高温にする（例: 中央の10%）
        const centerStart = Math.floor(nx * 0.45);
        const centerEnd = Math.floor(nx * 0.55);
        for (let i = centerStart; i <= centerEnd; i++) {
            u[i] = TEMP_HIGH;
            u_initial[i] = TEMP_HIGH;
        }
        u[0] = TEMP_LOW;
        u[nx] = TEMP_LOW;
        u_initial[0] = TEMP_LOW;
        u_initial[nx] = TEMP_LOW;
    } else if (tempOption4.checked) {
        // オプション4: 両端高温 & 中央低温
        for (let i = 0; i <= nx; i++) {
            u[i] = TEMP_LOW; // 全体を低温で初期化
            u_initial[i] = TEMP_LOW;
        }
        u[0] = TEMP_HIGH; // 左端を高温
        u[nx] = TEMP_HIGH; // 右端を高温
        u_initial[0] = TEMP_HIGH;
        u_initial[nx] = TEMP_HIGH;
    }
}

// シミュレーションをリセットする関数
function resetSimulation() {
    cancelAnimationFrame(animationFrameId); // 現在のアニメーションを停止
    currentTime = 0; // 時間をリセット
    setInitialConditionsBasedOnSelection(); // 選択されたオプションに基づいて温度を初期状態にリセット
    updateGraph(true); // 初期温度曲線を再描画
    updateGraph(false); // 現在の温度曲線（初期状態と同じ）を再描画
    updateDiagramBar(); // 棒グラフを更新
    timeCounter.textContent = `t : ${currentTime.toFixed(2)}`; // 時間表示をリセット
    startButton.textContent = '開始'; // 開始ボタンのテキストを「開始」に戻す
    startButton.disabled = false; // 開始ボタンを有効にする
}

// --- イベントリスナー ---
startButton.addEventListener('click', () => {
    if (startButton.textContent === '開始') {
        startButton.textContent = '停止';
        startButton.disabled = false;

        // シミュレーションが一時停止中でない場合、または完全に終了している場合に初期化
        if (currentTime === 0 || currentTime === totalSimulationTime) {
            setInitialConditionsBasedOnSelection(); // 選択されたオプションに基づいて初期温度を設定
            currentTime = 0;
        }

        updateGraph(true);
        updateGraph(false);
        updateDiagramBar();
        timeCounter.textContent = `t : ${currentTime.toFixed(2)}`;

        animationFrameId = requestAnimationFrame(animate);
    } else {
        startButton.textContent = '開始';
        cancelAnimationFrame(animationFrameId);
    }
});

// リセットボタンのイベントリスナー
resetButton.addEventListener('click', resetSimulation);

// 温度設定ラジオボタンのイベントリスナー
document.querySelectorAll('input[name="tempOption"]').forEach(radio => {
    radio.addEventListener('change', () => {
        // ラジオボタンが変更されたら、シミュレーションをリセットして新しい初期条件を適用
        resetSimulation();
    });
});

// ページロード時の初期描画
// 最初はデフォルトの選択肢（オプション1）で初期化
setInitialConditionsBasedOnSelection();
updateGraph(true);
updateGraph(false);
updateDiagramBar();
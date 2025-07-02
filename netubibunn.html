netubibunn.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>熱伝導方程式デモ</title>
    <style>
        /* 全体のフォント設定 */
        body {
            font-family: 'Hiragino Sans', 'Meiryo', sans-serif;
            color: #333;
            margin: 0;
            padding: 20px;
            background-color: #f0f0f0;
        }

        /* 全体を囲むコンテナ */
        .container {
            position: relative;
            width: 850px;
            height: 750px; /* 全体の高さをさらに増やす */
            margin: 40px auto;
            border: 1px solid #ddd;
            background-color: #fff;
            box-shadow: 0 0 15px rgba(0,0,0,0.05);
            padding: 20px;
            box-sizing: border-box;
        }

        /* 各要素の配置 */
        .main-title {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 18px;
            letter-spacing: 1px;
            color: #555;
        }

        /* 開始ボタンと時間カウンターの新しい位置 */
        .control-panel {
            position: absolute;
            top: 400px; /* さらに下に移動 */
            left: 20px;
            width: 320px;
        }

        .start-button {
            background-color: #d3d3d3;
            border: 1px solid #a0a0a0;
            padding: 10px 30px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.2s;
            display: block;
            margin-bottom: 20px;
            width: fit-content;
        }
        .start-button:hover {
            background-color: #c0c0c0;
        }
        .start-button:active {
            background-color: #b0b0b0;
            box-shadow: none;
        }

        .time-counter {
            background-color: #fff8e1;
            border: 3px solid #ffab40;
            padding: 15px 20px;
            border-radius: 8px;
            font-size: 24px;
            font-family: 'Courier New', monospace;
            letter-spacing: 4px;
            color: #e65100;
            width: fit-content;
        }

        /* --- 数式セクション --- */
        .equation-section {
            position: absolute;
            top: 70px;
            left: 20px;
            width: 320px;
        }

        .equation-section h2 {
            font-size: 20px;
            margin-bottom: 15px;
            color: #444;
        }
        
        .equations-wrapper {
            font-size: 20px;
            line-height: 1.8;
        }

        .equation-pde {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: 20px;
        }
        
        .fraction {
            display: inline-flex;
            flex-direction: column;
            text-align: center;
            vertical-align: middle;
            font-size: 22px;
        }

        .numerator {
            padding: 0 5px;
            border-bottom: 2px solid #333;
        }

        .denominator {
            padding: 0 5px;
        }
        .equation-pde span {
            font-size: 24px;
        }


        .equation-discrete {
            margin-top: 25px;
            font-family: 'Times New Roman', serif;
            font-size: 19px;
            letter-spacing: 0.5px;
        }
        
        .equation-discrete .param-r {
            margin-left: 50px;
        }

        /* --- グラフと図のセクション --- */
        .visuals-section {
            position: absolute;
            top: 50px; /* 数式の横に配置 */
            left: 360px;
            width: 450px;
        }

        .graph-title {
            text-align: center;
            font-size: 22px;
            margin: 0;
            color: #444;
        }
        
        /* SVGグラフのスタイル */
        .graph-svg {
            border: 1px solid #ccc;
            background-color: #fcfcfc;
            margin-top: 10px;
        }

        .graph-svg .axis {
            stroke: black;
            stroke-width: 1.5;
        }

        .graph-svg .axis-label {
            font-size: 20px;
        }
        
        .graph-svg .curve {
            stroke: #d90429;
            stroke-width: 2.5;
            fill: none;
        }
        
        .graph-svg .dashed-line { /* t=0の曲線に使うクラス */
            stroke: #555;
            stroke-width: 1.5; /* 少し太くして見やすく */
            stroke-dasharray: 5, 5; /* ダッシュ間隔を調整 */
            fill: none;
        }
        
        .graph-caption {
            text-align: center;
            font-size: 18px;
            margin-top: 10px;
            color: #555;
        }

        /* 下部の図 */
        .diagram {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 40px; /* グラフと鉄棒の間の余白 */
            width: 100%;
        }

        .diagram-block {
            width: 70px;
            height: 100px;
            background-color: #e9f1f6;
            border: 1px solid #b0c4de;
        }

        .diagram-bar-wrapper {
            width: 300px; 
            height: 70px;
            display: flex;
        }

        .diagram-segment {
            flex-grow: 1;
            height: 100%;
        }

    </style>
</head>
<body>

<div class="container">
    <div class="main-title">時間はカウンターで表す</div>
    <div class="equation-section">
        <h2>熱伝導方程式</h2>
        <div class="equations-wrapper">
            <div class="equation-pde">
                <div class="fraction">
                    <span class="numerator">&part;u</span>
                    <span class="denominator">&part;t</span>
                </div>
                <span>=</span>
                <span style="font-size: 22px;">&alpha;</span>
                <div class="fraction">
                    <span class="numerator">&part;<sup>2</sup>u</span>
                    <span class="denominator">&part;x<sup>2</sup></span>
                </div>
            </div>
            <div class="equation-discrete">
                <span>u<sub>i,j+1</sub> = r(u<sub>i+1,j</sub> + u<sub>i-1,j</sub>) + (1-2r)u<sub>i,j</sub></span>
                <span class="param-r">r = &alpha;&Delta;t/&Delta;x<sup>2</sup></span>
            </div>
        </div>
    </div>

    <div class="control-panel">
        <div class="start-button" id="startButton">開始</div>
        <div class="time-counter" id="timeCounter">t : 0.00</div>
    </div>

    <div class="visuals-section">
        <p class="graph-title">温度u</p>
        <svg width="400" height="250" class="graph-svg" id="temperatureGraph">
            <g transform="translate(50, 20)">
                <line x1="0" y1="200" x2="300" y2="200" class="axis" /> <line x1="0" y1="0" x2="0" y2="200" class="axis" />   <text x="305" y="205" class="axis-label">x</text> <text x="-20" y="10" class="axis-label">u</text>
                
                <path class="dashed-line" id="initialTemperatureCurve" />
                <text x="310" y="35" class="label-text" id="initialTemperatureLabel">t=0 (初期温度)</text>
                
                <path class="curve" id="currentTemperatureCurve" />
            </g>
        </svg>
        <p class="graph-caption">u : 温度, &nbsp;x : 位置, &nbsp;t : 時間</p>
        
        <div class="diagram">
            <div class="diagram-block"></div>
            <div class="diagram-bar-wrapper" id="diagramBar">
                </div>
            <div class="diagram-block"></div>
        </div>
    </div>
</div>

<script>
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

    const totalSimulationTime = 5; // シミュレーション終了時間
    let currentTime = 0; // 現在のシミュレーション時間

    // --- 新しい設定: 1フレームあたりに進めるシミュレーションステップ数 ---
    const stepsPerFrame = 50; // 1フレームあたり50ステップ計算を進める

    // 温度配列 u[i] は x[i] における温度
    let u = new Array(nx + 1).fill(0);
    let u_new = new Array(nx + 1).fill(0);
    // 初期温度を保存する配列 (t=0の曲線描画用)
    let u_initial = new Array(nx + 1).fill(0);

    // --- 初期条件の設定 ---
    const initialUniformTemperature = 80; // ★ここを変更：初期の一定温度
    const boundaryTemperature = 20; // 境界の温度 (両端)

    function initializeTemperature() {
        for (let i = 0; i <= nx; i++) {
            u[i] = initialUniformTemperature; // 全体を一定温度で初期化
            u_initial[i] = initialUniformTemperature; // 初期温度を保存
        }
        // 境界条件 (固定温度)
        u[0] = boundaryTemperature; // 左端の温度
        u[nx] = boundaryTemperature; // 右端の温度
        u_initial[0] = boundaryTemperature; // 初期温度の境界も設定
        u_initial[nx] = boundaryTemperature; // 初期温度の境界も設定
    }
    
    // 初期温度を設定
    initializeTemperature();

    // --- DOM要素の取得 ---
    const startButton = document.getElementById('startButton');
    const timeCounter = document.getElementById('timeCounter');
    const temperatureGraph = document.getElementById('temperatureGraph');
    const currentTemperatureCurve = document.getElementById('currentTemperatureCurve');
    const initialTemperatureCurve = document.getElementById('initialTemperatureCurve');
    const initialTemperatureLabel = document.getElementById('initialTemperatureLabel');
    const diagramBar = document.getElementById('diagramBar');

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
            segment.style.backgroundColor = getColorFromTemperature(u[i]);
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

    // --- イベントリスナー ---
    startButton.addEventListener('click', () => {
        if (startButton.textContent === '開始') {
            startButton.textContent = '停止';
            startButton.disabled = false; 
            
            currentTime = 0;
            initializeTemperature(); // 温度を初期状態に戻す

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

    // ページロード時の初期描画
    updateGraph(true);
    updateGraph(false);
    updateDiagramBar();

</script>

</body>
</html>

const data = [
    { name: "questions", value: 17 },
    { name: "schools", value: 25 },
    { name: "philosophers", value: 35 },
  ];
// canvas 画布
  const chartWidth = 400; // 条形图的宽度
  const chartHeight = 300; // 条形图的高度
  const margin = 15; // 条形图的外间距
// 画布地大小
  const containerWidth = chartWidth + margin*2;
  const containerHeight = chartHeight + margin*2;
// 取出所有的names x坐标
// [] Array() Array.from
  const names = Array.from(data, (d) => d.name)
  console.log(names);
  const values = Array.from(data, (d) => d.value)
  console.log(values);
// 不需要item, _来占个位
  const indices = Array.from(data, (_,i) => i)
  console.log(indices);

  const step = chartWidth / names.length
  const barWidth = step * 0.8 // x轴的偏移
// 横坐标每个name的绘制的起始值
  const xs = Array.from(indices, (i) => i * step)

  const y = chartHeight;
  const vmax = Math.max(...values);
  const barHeights = Array.from(values, (v) => chartHeight * (v / vmax));
  console.log(barHeights);

  const nameColor = {
    questions: '#5B8FF9',
    philosophers: '#61DDAA',
    schools: '#657898'
  }

  const colors = Array.from(names, (name) => nameColor[name])
  console.log(colors);
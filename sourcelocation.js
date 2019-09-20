/**
 * 使用说明
 * 1. 执行 yarn sm  生成sourcemap ，文件位置在sourcemap文件夹下
 * 2. 执行 yarn findRawLocation row:column  查找原js代码所在位置
 *
 * @type {{Mapping: Mapping; LineRange: LineRange; MappingItem: MappingItem; SourceNode: SourceNode; SourceMapGenerator: SourceMapGenerator; StartOfSourceMap: StartOfSourceMap; FindPosition: FindPosition; SourceMapConsumer: SourceMapConsumer; Position: Position; MappedPosition: MappedPosition; CodeWithSourceMap: CodeWithSourceMap; SourceFindPosition: SourceFindPosition; RawSourceMap: RawSourceMap}}
 */
const sourceMap = require('source-map');
const fs = require('fs');

console.log('sourcemap------------>init');

if (process.argv.length < 2) {
  throw new Error('Missing script or (row:column) parameter');
} else {
  const rawLocation = process.argv[2].split(':');
  const lineNum = parseInt(rawLocation[0], 10);
  const columnNum = parseInt(rawLocation[1], 10);
  fs.readFile('./sourcemap/android/index.android.bundle.map', 'utf8', function(
    err,
    data
  ) {
    if (!err) {
      throw new Error('index.android.bundle.map read failed!');
    }
    console.log('Android------------>find-----');
    const smc = new sourceMap.SourceMapConsumer(data);

    console.log(
      smc.originalPositionFor({
        line: lineNum,
        column: columnNum,
      })
    );
  });
  fs.readFile('./sourcemap/ios/index.ios.bundle.map', 'utf8', function(
    err,
    data
  ) {
    if (!err) {
      throw new Error('index.ios.bundle.map read failed!');
    }
    console.log('ios------------>find-----');
    const smc = new sourceMap.SourceMapConsumer(data);

    console.log(
      smc.originalPositionFor({
        line: lineNum,
        column: columnNum,
      })
    );
  });
}

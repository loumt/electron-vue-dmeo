const fs = require('fs')
const path = require('path')
const fileDir = path.join(__dirname, './')
const {filesMvTo,moveFiles} = require('./config').moveConfig


function copy(src,dest){
  // console.log(src);
  // console.log(dest);
  //创建读取流
  let readable = fs.createReadStream(src)
  // 创建写入流
  let writable = fs.createWriteStream(dest, {encoding: 'utf8'})
  // 通过管道来传输流
  readable.pipe(writable)
}

if (fs.existsSync(fileDir)) {
  let files = fs.readdirSync(fileDir)

  let msg = ''
  let success = true
  moveFiles.forEach((item) => {
    if (files.includes(item)) {
      msg += item + ' OK!\n'
    } else {
      success = false
      msg += item + ' not exist! check it again and move again!!!\n'
    }
  })
  console.log(msg)
  if (!success) {
    throw new Error(' package files is lost !!! ')
  }
  let move2dir = path.join(__dirname,filesMvTo)
  moveFiles.forEach((item) => {
    let p = path.join(fileDir, item)
    let mf = path.join(move2dir,item)
    copy(p,mf)
  })
} else {
  console.log('error: ' + fileDir + ' not exist !\n')
}

// copy(fileDir,path.join(__dirname,'./../../../test'));

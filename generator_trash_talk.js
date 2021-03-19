function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(job) {

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const jobs = {
    engineer: '工程師',
    designer: '設計師',
    founder: '創業家'
  }
  let trashTalk = ''
  if (job !== undefined) {
    const choseJob = jobs[job]
    const jobTask = sample(task[job])
    const phraseRandom = sample(phrase)
    trashTalk = `身為一個${choseJob}，${jobTask}，${phraseRandom}吧`
  } else {
    trashTalk = "請選擇職業"
  }


  return trashTalk
}


module.exports = generateTrashTalk
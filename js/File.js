const container = document.querySelector('.FileScrollBtn-Container-In');
const FileScrollBtn = document.querySelectorAll('.FileScrollBtn');

FileScrollBtn.forEach(button => {
  button.addEventListener('click', () => {
    // 获取当前按钮的索引
    const index = Array.from(FileScrollBtn).indexOf(button);
    ChangeFileImage(index)
    // 计算需要移动的距离
    const offset = (FileScrollBtn.length - index - 1) * button.offsetHeight;
    
    // 移动按钮
    FileScrollBtn.forEach((btn, i) => {
      if (i <= index) {
        btn.style.transform = `translateY(${offset}px)`;
      } else {
        btn.style.transform = `translateY(-${(index + 1) * btn.offsetHeight}px)`;
      }
    });
    
    // 将点击的按钮移动到底部
    button.style.transform = `translateY(${offset}px)`;
  });
});

//切换档案显示图片
function ChangeFileImage(BtnIndex)
{
    var image = document.getElementById('FileImage');
    switch (BtnIndex){
        case 0:
            image.src = 'Images/File/FileImg1.png';
            FileIntoPageUrl = 'File_Game.html';
            break;
        case 1:
            image.src = 'Images/File/FileImg2.png';
            FileIntoPageUrl = 'File_Comic.html';
            break;
        case 2:
            image.src = 'Images/File/FileImg3.png';
            FileIntoPageUrl = 'File_Model.html';
            break;
        case 3:
            image.src = 'Images/File/FileImg4.png';
            FileIntoPageUrl = 'File_Movie.html';
            break;
    }
}

let FileIntoPageUrl = 'File_Game.html';

function IntoFilePage()
{
    window.location.href = FileIntoPageUrl;
}

/*游戏界面弹窗逻辑 */
const triggers = document.querySelectorAll('.GamePopup-trigger');
const overlay = document.querySelector('.GameOverlay');

triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
        const popup = this.nextElementSibling;
        popup.style.display = 'block'; // 显示弹窗
        overlay.style.display = 'block'; // 显示灰色背景层
    });
});


// 点击灰色背景层关闭弹窗
overlay.addEventListener('click', function () {
    const popups = document.querySelectorAll('.FileGamePopUp');
    popups.forEach(popup => {
        popup.style.display = 'none'; // 隐藏所有弹窗
    });
    overlay.style.display = 'none'; // 隐藏灰色背景层
});


const ComicImg1 = document.getElementById('ComicImg1');
const ComicImg2 = document.getElementById('ComicImg2');
const ComicImg3 = document.getElementById('ComicImg3');
const ComicImg4 = document.getElementById('ComicImg4');
const ComicImg5 = document.getElementById('ComicImg5');
const ComicImg6 = document.getElementById('ComicImg6');
const ComicImg7 = document.getElementById('ComicImg7');
const ComicImg8 = document.getElementById('ComicImg8');
const ComicImg9 = document.getElementById('ComicImg9');

ComicImg1.addEventListener('click', function () {
  ComicImg1.style.zIndex = ComicImg2.style.zIndex+1;
});

ComicImg2.addEventListener('click', function () {
  ComicImg1.style.zIndex = '5'
  ComicImg2.style.zIndex = '10'
  ComicImg3.style.zIndex = '5'
});

ComicImg3.addEventListener('click', function () {
  ComicImg3.style.zIndex = ComicImg2.style.zIndex+1;
});

ComicImg4.addEventListener('click', function () {
  ComicImg4.style.zIndex = ComicImg5.style.zIndex+1;
});

ComicImg5.addEventListener('click', function () {
  ComicImg4.style.zIndex = '5'
  ComicImg5.style.zIndex = '10'
  ComicImg6.style.zIndex = '5'
});

ComicImg6.addEventListener('click', function () {
  ComicImg6.style.zIndex = ComicImg5.style.zIndex+1;
});

ComicImg7.addEventListener('click', function () {
  ComicImg7.style.zIndex = ComicImg8.style.zIndex+1;
});

ComicImg8.addEventListener('click', function () {
  ComicImg7.style.zIndex = '5'
  ComicImg8.style.zIndex = '10'
  ComicImg9.style.zIndex = '5'
});

ComicImg9.addEventListener('click', function () {
  ComicImg9.style.zIndex = ComicImg8.style.zIndex+1;
});
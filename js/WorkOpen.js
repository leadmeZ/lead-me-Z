function scrollDown() {
  container.scrollBy({ top: 200, behavior: 'smooth' }); // 向下滚动 50px
  checkOverflow(); // 检查是否滚动到底部
}

function scrollUp() {
  container.scrollBy({ top: -200, behavior: 'smooth' }); // 向上滚动 50px
  checkOverflow(); // 检查是否滚动到顶部
}

const container = document.querySelector('.container');
const topButton = document.querySelector('.top-button');
const bottomButton = document.querySelector('.bottom-button');
const bottomTrigger = document.querySelector('.BottomTrigger');
const topTrigger = document.querySelector('.TopTrigger');

topTrigger.addEventListener('click', function () {
  scrollUp()
});
bottomTrigger.addEventListener('click', function () {
  scrollDown()
});

function checkOverflow() { 

  // 检查是否滚动到底部
  if (container.scrollHeight - container.scrollTop <= container.clientHeight + 1) {
    bottomButton.style.display = 'none'; // 隐藏底部按钮
  } else {
    bottomButton.style.display = 'block'; // 显示底部按钮
  }

  // 检查是否滚动到顶部
  if (container.scrollTop === 0) {
    topButton.style.display = 'none'; // 隐藏顶部按钮
  } else {
    topButton.style.display = 'block'; // 显示顶部按钮
  }
}

// 监听容器滚动事件
document.querySelector('.container').addEventListener('scroll', checkOverflow);

// 初始化检查
checkOverflow();

const OpenImgTriggers = document.querySelectorAll('.OpenImgTriggers');
const OpenBigImgs = document.querySelectorAll('.OpenBig');
const OpenBigImgArray = Array.from(OpenBigImgs);

OpenImgTriggers.forEach(trigger => {
  trigger.addEventListener('click', function () {
      if(WorkIndex == WorkContentArray.indexOf(trigger))
      {
          window.location.href = 'WorkOpen.html'
      }
  });
});

/*游戏界面弹窗逻辑 */
const triggers = document.querySelectorAll('.item');
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

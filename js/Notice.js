const Noticebtn_New = document.querySelector('.Noticebtn-New');
const Noticebtn_Community = document.querySelector('.Noticebtn-Community');

Noticebtn_New.addEventListener('click',(event)=>{
    event.preventDefault(); // 阻止默认跳转行为
    Noticebtn_New.classList.add('active');
    Noticebtn_Community.classList.remove('active');

    document.getElementById('Notice-New').style.display = 'block';
    document.getElementById('Notice-Community').style.display = 'none';
})

Noticebtn_Community.addEventListener('click',(event)=>{
    event.preventDefault(); // 阻止默认跳转行为
    Noticebtn_Community.classList.add('active');
    Noticebtn_New.classList.remove('active');

    document.getElementById('Notice-New').style.display = 'none';
    document.getElementById('Notice-Community').style.display = 'block';
})

Noticebtn_New.classList.add('active');


const sliderWrapper = document.querySelector('.noticeSlider-wrapper');
const indicators = document.querySelectorAll('.noticeIndicator');
const totalImages = document.querySelectorAll('.noticeSlider-wrapper img').length;
let currentIndex = 0;

// 更新指示器状态
function updateIndicator() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// 切换到下一张图片
function slideNext() {
  currentIndex = (currentIndex + 1) % totalImages; // 循环切换
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateIndicator();
}

// 定时器，每隔 3 秒切换一次
setInterval(slideNext, 5000);

// 初始化指示器状态
updateIndicator();

const scrollContainer = document.querySelector('.notice-container');

scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault(); // 阻止默认滚动行为
  scrollContainer.scrollBy({
    top: event.deltaY, // 根据滚轮方向滚动
    behavior: 'smooth' // 平滑滚动
  });
});
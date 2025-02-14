let currentSection = 0;
const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.nav-button');
const navContent = document.querySelector('.nav');
const totalSections = sections.length;
let isScrolling = false; // 用于锁定滚动的标志
const scrollDelay = 800; // 滚动锁定时间（毫秒）

const EndBottom = document.querySelector('.EndBottom');

// 监听滚轮事件
window.addEventListener('wheel', (event) => {

    if (isScrolling) return; // 如果正在滚动，则忽略新的滚动事件

    isScrolling = true; // 锁定滚动

    if (event.deltaY > 0) {
        // 向下滚动
        if(currentSection == 4)
        {
            EndBottom.style.transform = `translateY(0vh)`;
        }

        if (currentSection < totalSections - 1) {
            currentSection++;
        }

    } else {
        // 向上滚动
        if (currentSection > 0) {
            currentSection--;
        }
        EndBottom.style.transform = `translateY(10vh)`;
    }

    // 滚动到对应部分
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });

    // 更新导航按钮高亮状态
    updateNavButtons(currentSection);

        // 解锁滚动
    setTimeout(() => {
        isScrolling = false;
    }, scrollDelay);
});

// 监听导航按钮点击事件
navButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默认跳转行为
        currentSection = index;

        // 滚动到对应部分
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });

        // 更新导航按钮高亮状态
        updateNavButtons(currentSection);
    });
});

// 更新导航按钮高亮状态的函数
function updateNavButtons(index) {
    if(index == 4)  //最后的时候隐藏
    {
        navContent.style.display = 'none';
    }
    else
    {
        navContent.style.display = 'block';
    }

    navButtons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

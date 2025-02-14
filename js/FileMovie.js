const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const items = document.querySelectorAll('.carousel .item');

let currentIndex = 0;

// 初始化：将第一个 div 移动到屏幕中心
function centerFirstItem() {
    const containerWidth = document.querySelector('.carousel-container').clientWidth;
    const firstItemWidth = items[0].clientWidth;
    const offset = (containerWidth - firstItemWidth) / 2;
    carousel.style.transform = `translateX(${offset}px)`;
}

// 初始化按钮状态
updateButtonVisibility();

function moveToItem(index) {
    const containerWidth = document.querySelector('.carousel-container').clientWidth;
    let totalOffset = 0;

    // 计算目标 item 之前的宽度总和
    for (let i = 0; i < index; i++) {
        totalOffset += items[i].clientWidth + 20; // 包括 margin
    }

    // 计算目标 item 的偏移量
    const targetItemWidth = items[index].clientWidth;
    const offset = (containerWidth - targetItemWidth) / 2 - totalOffset;
    carousel.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
    updateButtonVisibility(); // 更新按钮状态
}

function updateButtonVisibility() {
    // 如果当前是第一项，隐藏左按钮
    if (currentIndex === 0) {
        prevButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
    }

    // 如果当前是最后一项，隐藏右按钮
    if (currentIndex === items.length - 1) {
        nextButton.classList.add('hidden');
    } else {
        nextButton.classList.remove('hidden');
        nextButton.classList.try
    }
}

// 页面加载时，将第一个 div 移动到屏幕中心
window.addEventListener('load', centerFirstItem);

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToItem(currentIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        moveToItem(currentIndex + 1);
    }
});
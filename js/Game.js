const carousel = document.querySelector('.Game_carousel');
const prevButton = document.getElementById('Game_prev-button');
const nextButton = document.getElementById('Game_next-button');
const items = document.querySelectorAll('.Game_item');

let Game_currentIndex = 0;


// 右移动：下一个 div 在容器最右边
nextButton.addEventListener('click', () => {
    if (Game_currentIndex < items.length - 4) {
        Game_currentIndex++;
        scrollToItem();
    }
});

// 左移动：上一个 div 在容器最左边
prevButton.addEventListener('click', () => {
    if (Game_currentIndex > 0) {
        Game_currentIndex--;
        scrollToItem();
    }
});

// 滚动到指定 item
function scrollToItem() {
    const itemWidth = items[Game_currentIndex].clientWidth + 25; // 包括 margin
    const offset = Game_currentIndex * itemWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
}

const GameItemBtns = document.querySelectorAll('.GameItemBtn');
const GameItemMaskImgs = document.querySelectorAll('.GameItemMaskImg');
const GameItemMasks = document.querySelectorAll('.GameItemMask');
const GameItemContents = document.querySelectorAll('.GameItemContent');

const GameBtnArray = Array.from(GameItemBtns);
const GameMaskImgArray = Array.from(GameItemMaskImgs);
const GameMaskArray = Array.from(GameItemMasks);
const GameContentArray = Array.from(GameItemContents);

GameItemBtns.forEach(btn=>{
    btn.addEventListener('click',function(){
        const BtnIndex = GameBtnArray.indexOf(btn);
        GameMaskArray[BtnIndex].style.display = 'none'; // 关闭Mask
        GameItemMaskImgs[BtnIndex].style.display = 'none'; // 关闭Mask
        GameContentArray[BtnIndex].style.display = 'block'; // 显示弹窗
    })
})

GameItemContents.forEach(trigger=>{
    trigger.addEventListener('click',function(){
        const triggerIndex = GameContentArray.indexOf(trigger);
        window.location.href = '/html/GameNotice'+triggerIndex.toString()+'.html';
    })
})

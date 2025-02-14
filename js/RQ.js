const RightRQPanel = document.querySelector('.RightQRCodePanel');

// 鼠标悬停时显示面板
panel.addEventListener('mouseenter', () => {
    RightRQPanel.style.right = '0';
});

// 鼠标移出时隐藏面板
panel.addEventListener('mouseleave', () => {
    RightRQPanel.style.right = '-12vw';
});
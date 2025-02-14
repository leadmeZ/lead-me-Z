//档案-周边界面
const FileModel_LeftTriiger = document.querySelector('.FileModelLeft-Trigger');
const FileModel_RightTriiger = document.querySelector('.FileModelRight-Trigger');
const FileModel_Comtainer = document.querySelector('.FileModelContainer');
const FileModel_LeftImg = document.getElementById('FileModelLeftImg');
const FileModel_RightImg = document.getElementById('FileModelRightImg');
let FileModelPositionIndex = 1;   //档案周边界面位置，0表示在最左边，1表示在中间，2表示在右边，默认应该在中间。
const FileModelRight_Triggers = document.querySelectorAll('.FileModelLeftContent');

//左边触屏区域
FileModel_LeftTriiger.addEventListener('click', function(){
    if(FileModelPositionIndex == 1)
    {
        FileModelPositionIndex = 0;
        FileModel_Comtainer.style.transform = `translateX(0)`;
        FileModel_RightImg.style.opacity = 0;
        ChangeLeftContentDisplay(true)
    }
    else
    {
        FileModelPositionIndex = 1;
        FileModel_Comtainer.style.transform = `translateX(-35.547vw)`;
        FileModel_LeftImg.style.opacity = 1;
        FileModel_RightImg.style.opacity = 1;
        ChangeLeftContentDisplay(false)
    }
})

//右边触屏区域
FileModel_RightTriiger.addEventListener('click', function(){
    if(FileModelPositionIndex == 1)
        {
            FileModelPositionIndex = 2;
            FileModel_Comtainer.style.transform = `translateX(-71.094vw)`;
            FileModel_LeftImg.style.opacity = 0;
        }
        else
        {
            FileModelPositionIndex = 1;
            FileModel_Comtainer.style.transform = `translateX(-35.547vw)`;
            FileModel_LeftImg.style.opacity = 1;
            FileModel_RightImg.style.opacity = 1;
            ChangeLeftContentDisplay(false)
        }
})

/*游戏界面弹窗逻辑 */
const triggers = document.querySelectorAll('.GamePopup-trigger');
const overlay = document.querySelector('.GameOverlay2');

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

function ChangeLeftContentDisplay(isDisplay)
{
    if(isDisplay)
    {
        FileModelRight_Triggers.forEach(trigger=>{
            trigger.style.display = 'block';
        })
    }
    else
    {
        FileModelRight_Triggers.forEach(trigger=>{
            trigger.style.display = 'none';
        })
    }
}

//拿到点击按钮的下标，如果和默认下标一样，则显示图片，如果不一样，按照不同直接硬编码排序
let FileModel_RightImgIndex = 1;  //默认是1显示在中间
FileModelRight_Triggers.forEach(trigger=>{
    trigger.addEventListener('click',function(){
        //拿到点击的按钮下标
        const TriggerArray = Array.from(FileModelRight_Triggers);
        const index = Array.from(FileModelRight_Triggers).indexOf(trigger);
        if(FileModel_RightImgIndex == index)
        {
            const popup = this.nextElementSibling;
            popup.style.display = 'block'; // 显示弹窗
            overlay.style.display = 'block'; // 显示灰色背景层
        }
        else
        {
            FileModel_RightImgIndex = index;
            switch (index){
                case 0:
                    TriggerArray[0].style.transform = `translate(10vw,15vh)`;
                    TriggerArray[0].style.width = '32.95vw';
                    TriggerArray[0].style.zIndex = '10';

                    TriggerArray[1].style.transform = `translate(18vw,42vh)`;
                    TriggerArray[1].style.width = '27.81vw';
                    TriggerArray[1].style.zIndex = '5';

                    TriggerArray[2].style.transform = `translate(5vw,2vh)`;
                    TriggerArray[2].style.width = '27.81vw';
                    TriggerArray[2].style.zIndex = '5';
                    break;
                case 1:
                    TriggerArray[0].style.transform = `translate(5vw,2vh)`;
                    TriggerArray[0].style.width = '27.81vw';
                    TriggerArray[0].style.zIndex = '5';

                    TriggerArray[1].style.transform = `translate(10vw,15vh)`;
                    TriggerArray[1].style.width = '32.95vw';
                    TriggerArray[1].style.zIndex = '10';

                    TriggerArray[2].style.transform = `translate(18vw,42vh)`;
                    TriggerArray[2].style.width = '27.81vw';
                    TriggerArray[2].style.zIndex = '5';
                    break;
                case 2:
                    TriggerArray[0].style.transform = `translate(18vw,42vh)`;
                    TriggerArray[0].style.width = '27.81vw';
                    TriggerArray[0].style.zIndex = '5';

                    TriggerArray[1].style.transform = `translate(5vw,2vh)`;
                    TriggerArray[1].style.width = '27.81vw';
                    TriggerArray[1].style.zIndex = '5';

                    TriggerArray[2].style.transform = `translate(10vw,15vh)`;
                    TriggerArray[2].style.width = '32.95vw';
                    TriggerArray[2].style.zIndex = '10';

                    break;
            }
        }
    })
})


//改变左边三个按钮的层级和遮罩是否显示。
function ChangeMaskAndZIndex(index)
{

}

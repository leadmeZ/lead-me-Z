const workPrevBtn = document.getElementById('Work_prev-button');
const workNextBtn = document.getElementById('Work_next-button');

const WorkContents = document.querySelectorAll('.WorkMainContent');
const WorkContentArray = Array.from(WorkContents);

let WorkIndex = 1;  //默认是1显示在中间

WorkContentArray[0].classList.add('Left')
WorkContentArray[2].classList.add('Right')

WorkContents.forEach(trigger => {
    trigger.addEventListener('click', function () {
        if(WorkIndex == WorkContentArray.indexOf(trigger))
        {
            window.location.href = 'WorkOpen.html'
        }
    });
});

workNextBtn.addEventListener('click', function () {
    WorkIndex = WorkIndex+1;
    if(WorkIndex >= 3)
    {
        WorkIndex = 0;
    }
    UpdateWorkContent();
});

workPrevBtn.addEventListener('click', function () {
    WorkIndex = WorkIndex-1;
    if(WorkIndex < 0)
    {
        WorkIndex = 2;
    }
    UpdateWorkContent();
});


//点击两侧的内容，显示到中间来。
function UpdateWorkContent()
{
    switch (WorkIndex){
        case 0:
            RemoveAll();
            WorkContentArray[1].classList.add('Right');
            WorkContentArray[2].classList.add('Left');
            break;
        case 1:
            RemoveAll();
            WorkContentArray[2].classList.add('Right');
            WorkContentArray[0].classList.add('Left');
            break;
        case 2:
            RemoveAll();
            WorkContentArray[0].classList.add('Right');
            WorkContentArray[1].classList.add('Left');
            break;
    }
}

function RemoveAll()
{
    WorkContentArray.forEach(content=>{
        if(content.classList.contains('Left'))
        {
            content.classList.remove('Left')
        }
        if(content.classList.contains('Right'))
        {
            content.classList.remove('Right')
        }
    })
}
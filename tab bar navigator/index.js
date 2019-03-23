const items=document.querySelectorAll('.item');
const body=document.body;

items.forEach((tab)=>{
  tab.addEventListener("click",()=>{
    items.forEach((i)=>{
      //将所有active移除
      i.classList.remove('active');
    });
    //再将自己添加active
   tab.classList.add('active');
        body.style.backgroundColor=getComputedStyle(tab).getPropertyValue('color');
  });
});
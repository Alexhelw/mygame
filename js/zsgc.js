var addBtn = document.getElementById('addBtn');
    var oUl = document.getElementsByTagName('ul')[0];
    var upds = document.getElementsByClassName('update');
    var dels = document.getElementsByClassName('delete');
    addBtn.onclick = function () {
        var res = prompt('请输入要添加的游戏');
        if(res){
            var oLi = document.createElement('li');
            oLi.innerHTML = res+'<span class="update">修改</span><span class="delete">删除</span>';
            oUl.appendChild(oLi);
        }
    };
    oUl.onclick = function (event) {
        event = event || window.event;
        var tar = event.target||event.srcElement; 
        console.log(tar);
        if(tar.innerHTML === '修改'){
            var res = prompt('请输入修改后游戏');
            if(res){
                var oLi = document.createElement('li');
                oLi.innerHTML = res+'<span class="update">修改</span><span class="delete">删除</span>';
                oUl.replaceChild(oLi,tar.parentNode);
            }
        }
        if(tar.innerHTML === '删除'){
            if(confirm('确定要删除该项吗？')){
                oUl.removeChild(tar.parentNode);
            }
        }
    }
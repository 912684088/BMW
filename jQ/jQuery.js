<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src=""></script>
<script>
     $(function () {
         $(":input").on('click',function () {
             if ($("img:hidden").length){
                 $("input").val("隐藏")
                 $("img").slideDown(2000)//slideDown显示
             }else {
                 $("input").val("显示")
                 $("img").slideUp(2000,function () {
                     alert("可以接着执行")
                 })//slideUp隐藏
             }
         })
     })
</script>
</head>
<body>
<input type="button" value="点击">
<img src="../image-bmw/03.png" width="760"/>
</body>
</html>
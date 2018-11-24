<?php
	//1.接收备忘录的内容
	$value = $_POST['value'];
	$date = $_POST['time'];

	echo $value;
	echo $date;

	//2.判断是否为空
	/*if($value == ''||$time == ''){
	{
	echo "内容不能为空";
	exit;
	}*/
	//3.连接数据库
    $conn=@mysql_connect("localhost","root","root");
	//4.选择数据库
	mysql_select_db('wxdb');
	//5.设置编码
		mysql_query('set names utf8');
	//6.准备SQL语句
	$sql = "insert into wxdb_memo5 values(null,'{$date}','{$value}')";
	
	//7.发送SQL语句
	$res = mysql_query($sql);
	//8.判断结果
	if($res){
	echo "添加至数据库成功！";
	}else{
		echo"添加至数据库失败！";
	}

?>
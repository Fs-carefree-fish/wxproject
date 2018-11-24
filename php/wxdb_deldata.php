<?php
	//1.接收id
	$id = $_POST['id'];
	
	//2.连接数据库
    $conn=@mysql_connect("localhost","root","root");
	
	//3.选择数据库
	mysql_select_db('wxdb');
	
	//4.设置编码
		mysql_query('set names utf8');
		
	//5.准备SQL语句
	$sql = "delete from wxdb_memo5 where dated = '{$id}' ";
	
	//6.发送SQL语句
	$res = mysql_query($sql);
	
	//7.判断结果
	if($res){
	echo "删除成功！";
	}else{
		echo"删除失败！";
	}

?>
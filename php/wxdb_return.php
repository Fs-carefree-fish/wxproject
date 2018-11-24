<?php
	//获取数据库数据
	//1.连接数据库
    $conn=@mysql_connect("localhost","root","root");
	//2.选择数据库
	mysql_select_db('wxdb');
	//3.设置编码
	//mysql_query('set names utf8');
	
	
	//4.准备SQL语句
	$sql = "select *from wxdb_memo5 order by id ASC";
	//5.发送SQL语句
	$res = mysql_query($sql);
	//================================
	class Emp {  
   
       public $dated ="";
       public $value =""; 

   }//================================
	//6.解析结果集资源
	$e = [];$l=[];
	while($row = mysql_fetch_assoc($res)){
	
   $e['dated'] = $row["dated"];
   $e['value'] = $row["content"];
   array_push($l,$e);
	}
	echo json_encode($l,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
	
	?>
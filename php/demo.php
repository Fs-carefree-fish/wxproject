<?PHP
   class Emp {  
   
       public $dated ="";
       public $value =""; 

   }
   $e = new Emp();  
   $e-> dated ="20000";
   $e-> value ="ceshi";
   
   echo json_encode($e);
?>
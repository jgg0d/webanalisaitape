<?php
function anti_injection($sql){
   $sql = preg_replace("/(from|select|insert|delete|where|drop table|show tables|#|\*|--|\\\\)/", "" ,$sql);
   $sql = trim($sql);
   $sql = strip_tags($sql);
   $sql = addslashes($sql);
   return $sql;
}
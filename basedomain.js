<html>
<head>
<script type="text/javascript">
function getBaseDomain() {
	var url=document.getElementById("domain1").value;
	// var domain="";
	var temp=url.split(".");
	alert(temp[1]+"."+temp[2]+"."+temp[3]);//placeholders what we need to output in a string with(.)
	
   
}
//document.write(getBaseDomain("subdomain.example.co.uk") + "<br/>");// )
</script>
</head>
<body>

<input type="text" id="domain1" name="domain1" value="subdomain.example.co.uk"><!--can be given any base domain(not static)-->
<input type="button" value="get" onclick="getBaseDomain();">


</body>
</html>
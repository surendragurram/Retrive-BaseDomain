<html>
<head>
<script type="text/javascript">
function getBaseDomain(url) {
    var domain;
    //find & remove protocol (http or subdomain) and get domain
    if (url.indexOf("://") > -1) {//comparison operator 
        domain = url.split('/')[2];//and no need form 2nd place 
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}

document.write(getBaseDomain("sudomain://example.co.uk") + "<br/>");// there is no 3rd domain here
document.write(getBaseDomain("https://www.google.com/images=ZIlkQds_nx") + "<br/>");//here you have(difference)

</script>
</head>
<body>
</body>
</html>

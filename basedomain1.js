<script>
function getBaseDomain(domain) {
    var parts = domain.split('.').reverse();
    var cnt = parts.length;
    if (cnt >= 3) {
    if (parts[1].match(/^(com|edu|co|$/i)) {
        return parts[2] + '.' + parts[1] + '.' + parts[0];
    }
}

return parts[1] + '.' + parts[0];
}
alert(getBaseDomain("subdomain.example.co.uk"));
</script>
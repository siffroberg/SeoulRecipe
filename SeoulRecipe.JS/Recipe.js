</script>
<div class="language-switcher">
  <a href="#" onclick="changeLanguage('en');"><img src="da-flag.png" alt="Danish"></a>
  <a href="#" onclick="changeLanguage('fr');"><img src="en-flag.png" alt="English"></a>
</div>
<script>
function changeLanguage(lang) {
  var url = window.location.href;
  var new Url = url.replace(/\/(da|en)\//, '/' + lang + '/');
  window.location.href = newUrl;
}
</script>


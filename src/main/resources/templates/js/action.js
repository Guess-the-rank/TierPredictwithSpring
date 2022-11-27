function skipVideo(videoId) {
    var req;
    try {
      req = window.XMLHttpRequest?new XMLHttpRequest():
      new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      //Kein AJAX Support
    }
   // alert(videoId);
    request = "videoId="+videoId;
    req.open('post', '/actions/skippedVideos.php');
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
    req.send(request);
    console.log("sentRequest");
  }
  
  function sendRating(videoId, rating) {
    console.log(videoId + "," + rating);
    var req;
    try {
      req = window.XMLHttpRequest?new XMLHttpRequest():
      new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      //Kein AJAX Support
    }
   // alert(videoId);
    request = "videoId="+videoId+"&"+"rating="+rating;
    req.open('post', '/actions/ratings.php');
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
    req.send(request);
  }
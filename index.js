(function(){

  'use strict';

  var methodElement = document.getElementById('js-method'),
      usageElement = document.getElementById('js-usage'),
      quotaElement = document.getElementById('js-quota');

  if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage.estimate().then(function(result) {
      methodElement.innerHTML = 'navigator.storage.estimate()';
      usageElement.innerHTML = result.usage;
      quotaElement.innerHTML = result.quota;
    });
  } else if ('webkitTemporaryStorage' in navigator && 'queryUsageAndQuota' in navigator.webkitTemporaryStorage) {
    navigator.webkitTemporaryStorage.queryUsageAndQuota(function(usage, quota) {
      methodElement.innerHTML = 'navigator.webkitTemporaryStorage.queryUsageAndQuota()';
      usageElement.innerHTML = usage;
      quotaElement.innerHTML = quota;
    });
  } else {
    methodElement.innerHTML = 'none';
    usageElement.innerHTML = NaN;
    quotaElement.innerHTML = NaN;
  }

}());

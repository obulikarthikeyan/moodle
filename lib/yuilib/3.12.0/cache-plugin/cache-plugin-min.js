/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("cache-plugin",function(e,t){function n(t){var n=t&&t.cache?t.cache:e.Cache,r=e.Base.create("dataSourceCache",n,[e.Plugin.Base]),i=new r(t);return r.NS="tmpClass",i}e.mix(n,{NS:"cache",NAME:"cachePlugin"}),e.namespace("Plugin").Cache=n},"3.12.0",{requires:["plugin","cache-base"]});

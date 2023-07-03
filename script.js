(function(){
    var script = {
 "start": "this.init()",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  "this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2",
  "this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7",
  "this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 20,
 "scripts": {
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "class": "Player",
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "downloadEnabled": false,
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "Player14335"
 },
 "overflow": "visible",
 "definitions": [{
 "duration": 1000,
 "id": "effect_0C435E28_164F_9B33_41A0_7884A1D93B06",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "label": "Photo Album 01. Chaturmukh 360 04",
 "id": "album_044E311F_16C2_71C6_419F_139EEE17D266",
 "thumbnailUrl": "media/album_044E311F_16C2_71C6_419F_139EEE17D266_t.png",
 "playList": "this.album_044E311F_16C2_71C6_419F_139EEE17D266_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "duration": 1000,
 "id": "effect_0C405E28_164F_9B33_41AE_A35A34D34568",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 140,
  "yaw": 12.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0.28
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_0C41FE28_164F_9B33_41B0_D6D0476CFA09",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C40EE28_164F_9B33_419C_8454C3386A0A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 05",
 "id": "panorama_07A1946C_1642_904B_4191_2D39A8813BAC",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "hfovMax": 141,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_013BD8CF_16CD_870D_41B6_0ECAE8646D1A"
 ]
},
{
 "duration": 1000,
 "id": "effect_0C432E28_164F_9B33_4199_CFC4E788A9E8",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 11",
 "id": "panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 147,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_008EC122_16CF_8937_41B2_21BCF57AF001",
  "this.overlay_0F557C20_16C2_9F33_41B7_4B4BC5E73BBF",
  "this.overlay_0E139C1D_164E_7F0D_41B4_E0FB2881590A"
 ]
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_040C5939_16C6_91CA_4192_9E0A8DE1A004",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_16023AD3_1A6D_ACCA_419C_E18AF8AD319C",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_0C40DE28_164F_9B33_41B6_F7918E3E21D6",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098BE3B1_1645_8915_41B3_E12D1A3C71CF",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 137,
  "yaw": 0.04,
  "class": "PanoramaCameraPosition",
  "pitch": -2.03
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_camera",
 "class": "PanoramaCamera"
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "media": "this.panorama_07BFDC46_1642_9047_41AD_357A6C23EB20",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C419E28_164F_9B33_419E_FDADED17D90E, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C41FE28_164F_9B33_41B0_D6D0476CFA09, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C402E28_164F_9B33_4182_74D5472C7CE9, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C418E28_164F_9B33_41B1_EBA2C03793A7, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C41EE28_164F_9B33_4195_60BBD566E82A, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C41DE28_164F_9B33_41A1_C8318F2BD9EF, 'showEffect', false)",
   "camera": "this.panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C400E28_164F_9B33_4189_15AF152E4F3C, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C406E28_164F_9B33_4156_33BA198BBA6C, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C404E28_164F_9B33_41A8_459190691A98, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C403E28_164F_9B33_41AF_8FFCD34D3DB3, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C401E28_164F_9B33_41B0_5537E1C64174, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C407E28_164F_9B33_41B6_A9A3A371C241, 'showEffect', false)",
   "camera": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40AE28_164F_9B33_4197_376405DF39C1, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C409E28_164F_9B33_41A7_666350DEC2BA, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C40CE28_164F_9B33_4190_116A316AEC13, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C405E28_164F_9B33_41AA_688A816D4884, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C40BE28_164F_9B33_41A4_08113A58DB9A, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C40EE28_164F_9B33_419C_8454C3386A0A, 'showEffect', false)",
   "camera": "this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C430E28_164F_9B33_41B3_E91684550815, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C437E28_164F_9B33_41B0_6C089F02F23B, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C435E28_164F_9B33_419C_8F34A362A260, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C433E28_164F_9B33_41B6_1D739891B341, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C436E28_164F_9B33_41A9_366F8819FBDA, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C434E28_164F_9B33_41A9_F621F4695A08, 'showEffect', false)",
   "camera": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C402E28_164F_9B33_41AA_5B926308AD9A, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C400E28_164F_9B33_41AB_DE08F0CD3A1D, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C407E28_164F_9B33_41B4_6324E9693DE1, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C43AE28_164F_9B33_41A8_E38E188AB230, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C403E28_164F_9B33_41B5_4F35B89B1593, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C401E28_164F_9B33_41A9_BA4977621B7A, 'showEffect', false)",
   "camera": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40BE28_164F_9B33_41A0_BE8BEE072535, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C409E28_164F_9B33_41B3_4E9A2ADA5BBC, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C40FE28_164F_9B33_41AB_493B0632F728, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C405E28_164F_9B33_41AE_A35A34D34568, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C408E28_164F_9B33_41B7_287D09F2EDDB, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C40EE28_164F_9B33_418D_FB13FC721747, 'showEffect', false)",
   "camera": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40DE28_164F_9B33_4199_AE360ED78A14, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C433E28_164F_9B33_41A6_CE6847A7E97D, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C431E28_164F_9B33_4185_3B6E04EA8458, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40CE28_164F_9B33_4187_81F4F74AB8D4, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C432E28_164F_9B33_4199_CFC4E788A9E8, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C430E28_164F_9B33_41AD_234813F46E61, 'showEffect', false)",
   "camera": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C435E28_164F_9B33_41A0_7884A1D93B06, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C43BE28_164F_9B33_4180_ECCCBAD37682, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C439E28_164F_9B33_41A7_C4624444B0F8, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C437E28_164F_9B33_417F_B70C59B9667C, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C43AE28_164F_9B33_41B1_4468082B204D, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C438E28_164F_9B33_41B4_27D7164C029A, 'showEffect', false)",
   "camera": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C43CE28_164F_9B33_41B3_2AE1E247A29F, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C420E28_164F_9B33_4199_E44309CDE54F, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C409E28_164F_9B33_41AA_EFEF598F7282, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C43EE28_164F_9B33_4146_E5FF033F4A80, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C423E28_164F_9B33_418F_05AB35A52431, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C421E28_164F_9B33_4171_E16ECFA662AD, 'showEffect', false)",
   "camera": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40CE28_164F_9B33_41A5_3AB2B76BDD32, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C432E28_164F_9B33_41AF_DF21A6716C18, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C431E28_164F_9B33_41AA_9696CED3B31E, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40FE28_164F_9B33_4167_28478D0EF3D4, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C40DE28_164F_9B33_41B6_F7918E3E21D6, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C430E28_164F_9B33_41A2_E3E86C864157, 'showEffect', false)",
   "camera": "this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098B83B1_1645_8915_41A2_CB2583F3450B, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098BD3B1_1645_8915_41A6_DFFD0CC28E3A, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098BE3B1_1645_8915_41B3_E12D1A3C71CF, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098B73B1_1645_8915_41A6_8EEA392435A0, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098BB3B1_1645_8915_41B4_589500991968, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098BF3B1_1645_8915_41B6_EC5CC1696F8F, 'hideEffect', false)",
   "camera": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_044E311F_16C2_71C6_419F_139EEE17D266",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_0C407E28_164F_9B33_41B6_A9A3A371C241",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C41EE28_164F_9B33_4195_60BBD566E82A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C41DE28_164F_9B33_41A1_C8318F2BD9EF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C40BE28_164F_9B33_41A4_08113A58DB9A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C40DE28_164F_9B33_4199_AE360ED78A14",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 06",
 "id": "panorama_07A1089D_1642_90C5_41B4_6FF035D478AF",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_00F21B89_16C7_99F5_41A6_633B1BC163A1",
  "this.overlay_0251153D_16C3_890D_41B4_7ADDB9887DE9"
 ]
},
{
 "duration": 1000,
 "id": "effect_0C433E28_164F_9B33_41B6_1D739891B341",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C409E28_164F_9B33_41B3_4E9A2ADA5BBC",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C43CE28_164F_9B33_41B3_2AE1E247A29F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C40BE28_164F_9B33_41A0_BE8BEE072535",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 140,
  "yaw": 21.31,
  "class": "PanoramaCameraPosition",
  "pitch": 3.58
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_camera",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "duration": 1000,
 "id": "effect_0C402E28_164F_9B33_41AA_5B926308AD9A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C437E28_164F_9B33_41B0_6C089F02F23B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C403E28_164F_9B33_41B5_4F35B89B1593",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 142,
  "yaw": -14.63,
  "class": "PanoramaCameraPosition",
  "pitch": -26.72
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_098BB3B1_1645_8915_41B4_589500991968",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C43AE28_164F_9B33_41A8_E38E188AB230",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 135,
  "yaw": -1.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0.69
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_0C409E28_164F_9B33_41A7_666350DEC2BA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098B73B1_1645_8915_41A6_8EEA392435A0",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C439E28_164F_9B33_41A7_C4624444B0F8",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C420E28_164F_9B33_4199_E44309CDE54F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C432E28_164F_9B33_41AF_DF21A6716C18",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": false,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 09",
 "id": "panorama_07BE940A_1642_F7CF_41A8_042C74EAB978",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 145,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D10202B_1642_8736_41A4_840EB9B3BE83",
  "this.overlay_0C357EBE_1642_9B0F_41B1_70936B550AF5"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 139,
  "yaw": 20.04,
  "class": "PanoramaCameraPosition",
  "pitch": -2.46
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0442A3D8_1642_B04A_418B_74978E4EB753_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_0C409E28_164F_9B33_41AA_EFEF598F7282",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C437E28_164F_9B33_417F_B70C59B9667C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098BF3B1_1645_8915_41B6_EC5CC1696F8F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C43EE28_164F_9B33_4146_E5FF033F4A80",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C421E28_164F_9B33_4171_E16ECFA662AD",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C433E28_164F_9B33_41A6_CE6847A7E97D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C43AE28_164F_9B33_41B1_4468082B204D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C423E28_164F_9B33_418F_05AB35A52431",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 10",
 "id": "panorama_07BEF844_1642_FFBB_4181_CE791F77FA81",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 148,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D30EFE5_165F_993D_4178_DAC7D7E29DC7",
  "this.overlay_0C0256B6_1642_8B1F_41B4_E21C0E456FFC",
  "this.overlay_0CC2CE3A_1643_BB17_4178_9F002ADF9F0E"
 ]
},
{
 "duration": 1000,
 "id": "effect_0C40CE28_164F_9B33_4187_81F4F74AB8D4",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C431E28_164F_9B33_41AA_9696CED3B31E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C418E28_164F_9B33_41B1_EBA2C03793A7",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_040C5939_16C6_91CA_4192_9E0A8DE1A004",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_16020AD3_1A6D_ACCA_41A2_E74DE94826B6",
 "class": "PlayList"
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "01. Chaturmukh 360 07",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "01. Chaturmukh 360 06",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "01. Chaturmukh 360 05",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "01. Chaturmukh 360 04",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "01. Chaturmukh 360 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "01. Chaturmukh 360 11",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "01. Chaturmukh 360 03",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "01. Chaturmukh 360 02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "01. Chaturmukh 360 08",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "01. Chaturmukh 360 09",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "01. Chaturmukh 360 10",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "label": "Media",
 "id": "Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "class": "Menu",
 "backgroundColor": "#404040",
 "opacity": 0.4,
 "rollOverBackgroundColor": "#000000",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "fontColor": "#FFFFFF"
},
{
 "duration": 1000,
 "id": "effect_0C431E28_164F_9B33_4185_3B6E04EA8458",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C43BE28_164F_9B33_4180_ECCCBAD37682",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C400E28_164F_9B33_4189_15AF152E4F3C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C401E28_164F_9B33_41B0_5537E1C64174",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 141,
  "yaw": 0.55,
  "class": "PanoramaCameraPosition",
  "pitch": -8.5
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_0C430E28_164F_9B33_41A2_E3E86C864157",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C40FE28_164F_9B33_41AB_493B0632F728",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C402E28_164F_9B33_4182_74D5472C7CE9",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C408E28_164F_9B33_41B7_287D09F2EDDB",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 138,
  "yaw": 40.96,
  "class": "PanoramaCameraPosition",
  "pitch": -8.02
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.78,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 4.78,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.78,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_camera",
 "class": "PanoramaCamera",
 "manualZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 03",
 "id": "panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 147,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0F9EA8A3_16C5_8735_41A1_0D2F6AA47C7B",
  "this.overlay_0F3DC638_1645_8B13_4183_EEFA3D8F7F17"
 ]
},
{
 "duration": 1000,
 "id": "effect_098BD3B1_1645_8915_41A6_DFFD0CC28E3A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098B83B1_1645_8915_41A2_CB2583F3450B",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 137,
  "yaw": -19.77,
  "class": "PanoramaCameraPosition",
  "pitch": -1.91
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 07",
 "id": "panorama_07BFDC46_1642_9047_41AD_357A6C23EB20",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_02376E8C_16C2_70CB_4192_18AEC16BE8D6"
 ]
},
{
 "duration": 1000,
 "id": "effect_0C40CE28_164F_9B33_41A5_3AB2B76BDD32",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 04",
 "id": "panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 148,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0F0BDC45_16C2_BF7D_418B_01D7A3597263",
  "this.overlay_002A5BA5_16C2_B93D_41B5_C66F4798BEC4"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 123,
  "yaw": -34.37,
  "class": "PanoramaCameraPosition",
  "pitch": 5.84
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07A1946C_1642_904B_4191_2D39A8813BAC_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 137,
  "yaw": 6.65,
  "class": "PanoramaCameraPosition",
  "pitch": 12.32
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_07BE2046_1642_9046_41A7_FB013B1C4641_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_0C430E28_164F_9B33_41AD_234813F46E61",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C40CE28_164F_9B33_4190_116A316AEC13",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C400E28_164F_9B33_41AB_DE08F0CD3A1D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C40FE28_164F_9B33_4167_28478D0EF3D4",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C40EE28_164F_9B33_418D_FB13FC721747",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 02",
 "id": "panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 147,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0F13A0B0_16C2_8713_41AF_FCA69A642FA0",
  "this.overlay_0F4A06EA_16C2_8B37_418C_31757866F427"
 ]
},
{
 "duration": 1000,
 "id": "effect_0C405E28_164F_9B33_41AA_688A816D4884",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C436E28_164F_9B33_41A9_366F8819FBDA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C40AE28_164F_9B33_4197_376405DF39C1",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C434E28_164F_9B33_41A9_F621F4695A08",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C435E28_164F_9B33_419C_8F34A362A260",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C430E28_164F_9B33_41B3_E91684550815",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 01",
 "id": "panorama_0442A3D8_1642_B04A_418B_74978E4EB753",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 147,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0F6BA4A7_16C2_8F3D_4184_A47C5684A23A",
  "this.overlay_0F5CF0C1_16CE_8775_41A0_EE770B5EBF95",
  "this.overlay_0ED2F6C1_1642_8B75_41B4_E7ECE60080AD",
  "this.overlay_0D9B6FAC_1643_9933_4197_1390581D51AE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5"
  }
 ],
 "hfov": 360,
 "label": "01. Chaturmukh 360 08",
 "id": "panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_t.jpg",
 "cardboardMenu": "this.Menu_1615CAF2_1A6D_ACCA_41A8_341E6B12BFC2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 144,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0EBC773C_164F_8913_4199_E1B2604547BC",
  "this.overlay_0D68BB6F_164D_990D_41B6_C57DCDB3AD26",
  "this.overlay_0DC2015E_1643_890F_41A4_33CE4F7D8BAC"
 ]
},
{
 "duration": 1000,
 "id": "effect_0C403E28_164F_9B33_41AF_8FFCD34D3DB3",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C419E28_164F_9B33_419E_FDADED17D90E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C404E28_164F_9B33_41A8_459190691A98",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "fieldOfViewOverlayInsideOpacity": 0.81,
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "id": "map_040C5939_16C6_91CA_4192_9E0A8DE1A004",
 "class": "Map",
 "thumbnailUrl": "media/map_040C5939_16C6_91CA_4192_9E0A8DE1A004_t.png",
 "width": 3521,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_040C5939_16C6_91CA_4192_9E0A8DE1A004.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1734
   },
   {
    "url": "media/map_040C5939_16C6_91CA_4192_9E0A8DE1A004_lq.png",
    "width": 347,
    "class": "ImageResourceLevel",
    "height": 189,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.01,
 "label": "newasa_map_final web",
 "minimumZoomFactor": 0.5,
 "height": 1909,
 "fieldOfViewOverlayOutsideOpacity": 0.01
},
{
 "duration": 1000,
 "id": "effect_0C407E28_164F_9B33_41B4_6324E9693DE1",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C406E28_164F_9B33_4156_33BA198BBA6C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C438E28_164F_9B33_41B4_27D7164C029A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_0C401E28_164F_9B33_41A9_BA4977621B7A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 110,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "80%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "minHeight": 50,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "class": "ViewerArea",
 "height": "100%",
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": false,
 "maxHeight": 311,
 "maxWidth": 307,
 "id": "Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2",
 "right": "14.21%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "url": "skin/Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "2.95%",
 "width": "6.829%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "8.126%",
 "class": "Image",
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "Image20363"
 }
},
{
 "fontFamily": "Arial Black",
 "propagateClick": false,
 "textDecoration": "none",
 "id": "Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7",
 "right": "32.78%",
 "fontColor": "#000000",
 "horizontalAlign": "center",
 "borderSize": 0,
 "text": "चतुर्मुख देवळाची मानचित्रे",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0.06%",
 "width": "28.807%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "5vmin",
 "class": "Label",
 "height": "10.558%",
 "fontStyle": "normal",
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "Label25585"
 },
 "fontWeight": "bold"
},
{
 "fontFamily": "Arial Narrow",
 "propagateClick": false,
 "textDecoration": "none",
 "id": "Label_03408EA0_16CE_9B33_41B4_619B56FAD290",
 "left": "17.49%",
 "fontColor": "#000000",
 "horizontalAlign": "center",
 "borderSize": 0,
 "text": "360 Virtual Tour",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "3.83%",
 "width": "14.615%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "3vmin",
 "class": "Label",
 "height": "4.292%",
 "fontStyle": "normal",
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "Label26142"
 },
 "fontWeight": "bold"
},
{
 "id": "album_044E311F_16C2_71C6_419F_139EEE17D266_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02a Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09941372_1645_8917_41B0_32D8FBE0E1F7",
   "pitch": 7.26,
   "yaw": -37.91,
   "distance": 50
  }
 ],
 "id": "overlay_013BD8CF_16CD_870D_41B6_0ECAE8646D1A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.05,
   "yaw": -37.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09922382_1645_89F7_419A_950288A686B6",
   "pitch": 0.62,
   "yaw": 39.51,
   "distance": 50
  }
 ],
 "id": "overlay_008EC122_16CF_8937_41B2_21BCF57AF001",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.18,
   "yaw": 39.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.32,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09929382_1645_89F7_41B1_00AAF4223B42",
   "pitch": 0.41,
   "yaw": -36.76,
   "distance": 50
  }
 ],
 "id": "overlay_0F557C20_16C2_9F33_41B7_4B4BC5E73BBF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.32,
   "yaw": -36.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0992F382_1645_89F7_41A9_7BBEF8C8EFDF",
   "pitch": 3.35,
   "yaw": -0.5,
   "distance": 100
  }
 ],
 "id": "overlay_0E139C1D_164E_7F0D_41B4_E0FB2881590A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.15,
   "yaw": -0.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09974372_1645_8917_41AD_416B41AA8798",
   "pitch": -1.94,
   "yaw": -12.17,
   "distance": 50
  }
 ],
 "id": "overlay_00F21B89_16C7_99F5_41A6_633B1BC163A1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.17,
   "yaw": -12.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0997A372_1645_8917_4175_36B806B621AC",
   "pitch": -6.26,
   "yaw": 61.27,
   "distance": 50
  }
 ],
 "id": "overlay_0251153D_16C3_890D_41B4_7ADDB9887DE9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.08,
   "yaw": 61.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02a Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0991B382_1645_89F7_418F_E7B6FE046B2F",
   "pitch": -10.93,
   "yaw": -37.02,
   "distance": 50
  }
 ],
 "id": "overlay_0D10202B_1642_8736_41A4_840EB9B3BE83",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.87,
   "yaw": -37.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.06,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0991F382_1645_89F7_41B4_EEBBC4186D55",
   "pitch": -10.3,
   "yaw": -0.45,
   "distance": 50
  }
 ],
 "id": "overlay_0C357EBE_1642_9B0F_41B1_70936B550AF5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.06,
   "yaw": -0.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_099E2382_1645_89F7_41B6_44F4088E9415",
   "pitch": -12.77,
   "yaw": 42.1,
   "distance": 50
  }
 ],
 "id": "overlay_0D30EFE5_165F_993D_4178_DAC7D7E29DC7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.92,
   "yaw": 42.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_099E8382_1645_89F7_419B_DB211D01F676",
   "pitch": -15.03,
   "yaw": -59.27,
   "distance": 50
  }
 ],
 "id": "overlay_0C0256B6_1642_8B1F_41B4_E21C0E456FFC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.77,
   "yaw": -59.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_099EF382_1645_89F7_41B3_64D70E4AC47D",
   "pitch": -21.57,
   "yaw": -7.78,
   "distance": 100
  }
 ],
 "id": "overlay_0CC2CE3A_1643_BB17_4178_9F002ADF9F0E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.98,
   "yaw": -7.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09932382_1645_89F7_41B0_329A873CCEE1",
   "pitch": -10.31,
   "yaw": 89.91,
   "distance": 50
  }
 ],
 "id": "overlay_0F9EA8A3_16C5_8735_41A1_0D2F6AA47C7B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.61,
   "yaw": 89.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09938382_1645_89F7_419E_32794FEB476B",
   "pitch": -8.05,
   "yaw": -37.36,
   "distance": 50
  }
 ],
 "id": "overlay_0F3DC638_1645_8B13_4183_EEFA3D8F7F17",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.01,
   "yaw": -37.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_03DF65D4_19CD_8913_41B7_860C8797BF6F",
   "pitch": -7.91,
   "yaw": 41.26,
   "distance": 100
  }
 ],
 "id": "overlay_02376E8C_16C2_70CB_4192_18AEC16BE8D6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.72,
   "yaw": 41.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09944372_1645_8917_41A1_3877C8C5860C",
   "pitch": -7.07,
   "yaw": 91.11,
   "distance": 50
  }
 ],
 "id": "overlay_0F0BDC45_16C2_BF7D_418B_01D7A3597263",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.2,
   "yaw": 91.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0994B372_1645_8917_41B5_6238C65D7359",
   "pitch": -11.75,
   "yaw": -91.79,
   "distance": 50
  }
 ],
 "id": "overlay_002A5BA5_16C2_B93D_41B5_C66F4798BEC4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.82,
   "yaw": -91.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0993F382_1645_89F7_4197_478E72E1C390",
   "pitch": -12.65,
   "yaw": 61.34,
   "distance": 50
  }
 ],
 "id": "overlay_0F13A0B0_16C2_8713_41AF_FCA69A642FA0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.77,
   "yaw": 61.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02c Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09905382_1645_89F7_4194_183155ACE09A",
   "pitch": -10.11,
   "yaw": -52.19,
   "distance": 50
  }
 ],
 "id": "overlay_0F4A06EA_16C2_8B37_418C_31757866F427",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.92,
   "yaw": -52.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0994E372_1645_8917_41A3_F54A6059E58D",
   "pitch": -3.78,
   "yaw": -46.71,
   "distance": 50
  }
 ],
 "id": "overlay_0F6BA4A7_16C2_8F3D_4184_A47C5684A23A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.29,
   "yaw": -46.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09955372_1645_8917_4195_D86A8057AECB",
   "pitch": -11.07,
   "yaw": 53.51,
   "distance": 50
  }
 ],
 "id": "overlay_0F5CF0C1_16CE_8775_41A0_EE770B5EBF95",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.86,
   "yaw": 53.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09959372_1645_8907_4155_5C1BF9384F8D",
   "pitch": -3.78,
   "yaw": 21.86,
   "distance": 50
  }
 ],
 "id": "overlay_0ED2F6C1_1642_8B75_41B4_E7ECE60080AD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.29,
   "yaw": 21.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.28,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0995E382_1645_89F7_4195_145F47372DF0",
   "pitch": -4.4,
   "yaw": -17.54,
   "distance": 50
  }
 ],
 "id": "overlay_0D9B6FAC_1643_9933_4197_1390581D51AE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.28,
   "yaw": -17.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09908382_1645_89F7_419E_06F7A8DD8CF3",
   "pitch": -32.06,
   "yaw": -45.55,
   "distance": 50
  }
 ],
 "id": "overlay_0EBC773C_164F_8913_4199_E1B2604547BC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.84,
   "yaw": -45.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02c Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0990E382_1645_89F7_41A0_3A7ACBC90517",
   "pitch": -18.48,
   "yaw": 34.09,
   "distance": 50
  }
 ],
 "id": "overlay_0D68BB6F_164D_990D_41B6_C57DCDB3AD26",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.3,
   "yaw": 34.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09914382_1645_89F7_41B0_C7CBEF5B3847",
   "pitch": -33.98,
   "yaw": 165.86,
   "distance": 50
  }
 ],
 "id": "overlay_0DC2015E_1643_890F_41A4_33CE4F7D8BAC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.54,
   "yaw": 165.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.98
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09941372_1645_8917_41B0_32D8FBE0E1F7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09922382_1645_89F7_419A_950288A686B6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09929382_1645_89F7_41B1_00AAF4223B42",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0992F382_1645_89F7_41A9_7BBEF8C8EFDF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09974372_1645_8917_41AD_416B41AA8798",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0997A372_1645_8917_4175_36B806B621AC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0991B382_1645_89F7_418F_E7B6FE046B2F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0991F382_1645_89F7_41B4_EEBBC4186D55",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_099E2382_1645_89F7_41B6_44F4088E9415",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_099E8382_1645_89F7_419B_DB211D01F676",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_099EF382_1645_89F7_41B3_64D70E4AC47D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09932382_1645_89F7_41B0_329A873CCEE1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09938382_1645_89F7_419E_32794FEB476B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_03DF65D4_19CD_8913_41B7_860C8797BF6F",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09944372_1645_8917_41A1_3877C8C5860C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0994B372_1645_8917_41B5_6238C65D7359",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0993F382_1645_89F7_4197_478E72E1C390",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09905382_1645_89F7_4194_183155ACE09A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0994E372_1645_8917_41A3_F54A6059E58D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09955372_1645_8917_4195_D86A8057AECB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09959372_1645_8907_4155_5C1BF9384F8D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0995E382_1645_89F7_4195_145F47372DF0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09908382_1645_89F7_419E_06F7A8DD8CF3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0990E382_1645_89F7_41A0_3A7ACBC90517",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09914382_1645_89F7_41B0_C7CBEF5B3847",
 "class": "AnimatedImageResource",
 "frameDuration": 41
}],
 "width": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

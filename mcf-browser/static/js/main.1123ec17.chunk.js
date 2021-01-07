(this["webpackJsonpmcf-browser"]=this["webpackJsonpmcf-browser"]||[]).push([[0],{12:function(e,t,n){},25:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);n(12);var r=n(0),a=n.n(r),s=n(22),i=n.n(s),c=n(1),l=n.n(c),o=n(11),u=n(2),d=n(5),h=n(3),p=n(4),f=n(8),m=n(7),v=n(23),b=n.n(v),g="https://api.datacommons.org",E="error in declaring node",y="invalid namespace in node declaration",k="current node must be set before setting dcid",N="a node can only have one dcid",w="dcid property must be a string, not a node reference",x="cannot set dcid for current node; check if dcid is already set",j="current node must be set before declaring properties",O="missing ':', incorrect mcf triple format",C="missing property label";function I(e){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g+"/node/property-labels?dcids="+t,e.abrupt("return",fetch(n).then((function(e){return e.json()})).then((function(e){return JSON.parse(e.payload)[t]})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,n){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(l.a.mark((function e(t,n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g+"/node/property-values?limit=500&dcids="+t+"&property="+n+"&direction="+(r?"in":"out"),e.abrupt("return",fetch(a).then((function(e){return e.json()})).then((function(e){return JSON.parse(e.payload)[t]})).then((function(e){return r?e.in:e.out})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){if(!("dcid"in e)&&!("value"in e))throw new Error('ERROR: DC API returned an object with no "dcid" or "value" field: '+e);if("dcid"in e){var t=R.getNode("dcid:"+e.dcid);return t.setDCID(e.dcid),t.existsInKG=!0,t}return e.value}function L(e){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g+"/node/triples?dcids="+t+"&limit=1",e.abrupt("return",fetch(n).then((function(e){return e.json()})).then((function(e){return!!JSON.parse(e.payload)[t]})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return!e.startsWith("//")&&0!==e.length&&!e.startsWith("#")}var R=function(){function e(t){Object(h.a)(this,e),this.localId=t.startsWith("l:")?t:null,this.dcid=null,this.alreadyFetched=!1,this.existsInKG=!1,this.assertions=[],this.invAssertions=[],e.nodeHash[t]=this}return Object(p.a)(e,[{key:"setDCID",value:function(t){if(this.dcid&&this.dcid!==t)return!1;var n=e.nodeHash["dcid:"+t];return n&&n!==this&&this.mergeNode(n),this.dcid=t,e.nodeHash["dcid:"+t]=this,!0}},{key:"mergeNode",value:function(e){var t=this;this.localId!==e.localId&&(e.assertions.forEach((function(e){e.src=t,t.assertions.push(e)})),e.invAssertions.forEach((function(e){e.target=t,t.invAssertions.push(e)})))}},{key:"setExistsInKG",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.dcid&&!this.existsInKG){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,L(this.dcid);case 4:this.existsInKG=e.sent;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createAssertionsFromLabels",value:function(){var t=Object(u.a)(l.a.mark((function t(n,r){var a,s,i,c=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Object(d.a)(n),t.prev=1,i=l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.value,t.next=3,T(c.dcid,n,r).then((function(t){if(!t)throw new Error("No property values for dcid: "+c.dcid+" label: "+n);t.forEach((function(t){var a=H(t);if(r&&!e.isNode(a))throw new Error("Error creating assertion with non Node source");var s=r?a:c,i=r?c:a;e.isNode(a)&&a.alreadyFetched||new M(s,n,i,t.provenanceId)}))}));case 3:case"end":return t.stop()}}),t)})),a.s();case 4:if((s=a.n()).done){t.next=8;break}return t.delegateYield(i(),"t0",6);case 6:t.next=4;break;case 8:t.next=13;break;case 10:t.prev=10,t.t1=t.catch(1),a.e(t.t1);case 13:return t.prev=13,a.f(),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"fetchRemoteData",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.alreadyFetched&&this.dcid){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,I(this.dcid).then(function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createAssertionsFromLabels(n.outLabels,!1);case 2:return e.next=4,t.createAssertionsFromLabels(n.inLabels,!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:this.alreadyFetched=!0;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRef",value:function(){var e=this.dcid?this.dcid:"",t="";return this.localId&&!this.localId.includes("dcid")&&(t="["+this.localId+"]"),[e,t].join(" ").trim()}}],[{key:"getNode",value:function(t){var n=e.nodeHash[t];return n||new e(t)}},{key:"isNode",value:function(t){return t instanceof e}}]),e}();R.nodeHash={};var M=function e(t,n,r,a){Object(h.a)(this,e),this.src=t,this.property=n,this.provenance=a,this.target=r,t.assertions.push(this),r instanceof Object&&r.invAssertions.push(this)},A={l:"l",schema:"dcid",dcs:"dcid",dcid:"dcid"},P=function(){function e(t){Object(h.a)(this,e),this.prov=t,this.curNode=null,this.lineNum=-1,this.errors=[]}return Object(p.a)(e,[{key:"parsePropValues",value:function(e){var t,n=[],r=Object(d.a)(e.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));try{for(r.s();!(t=r.n()).done;){var a=t.value,s=a.split(":")[0].trim();if(s in A)n.push({ns:s,ref:a.substring(a.indexOf(":")+1).trim()});else{if(a.split(":").length>1&&!s.startsWith('"'))return this.errors.push([this.lineNum,this.line,"unrecognized namespace"]),[];n.push(a.replace(/^[" ]*(.*?)[" ]*$/g,"$1"))}}}catch(i){r.e(i)}finally{r.f()}return n}},{key:"setCurNode",value:function(t){if(1===t.length){var n,r;if(t[0]instanceof Object){if("dcid"!==(r=t[0].ns))return void this.errors.push([this.lineNum,this.line,y]);r+=":",n=t[0].ref}else n=t[0],r="";var a="l:"+r+n;if(this.curNode=R.getNode(a),"dcid:"===r){if(!this.curNode.setDCID(n))return void this.errors.push([this.lineNum,this.line,x]);e.localNodeHash[r+n]=this.curNode}else e.localNodeHash[a]=this.curNode}else this.errors.push([this.lineNum,this.line,E])}},{key:"setCurNodeDCID",value:function(e){this.curNode?1===e.length?"string"===typeof e[0]?this.curNode.setDCID(e[0])||this.errors.push([this.lineNum,this.line,x]):this.errors.push([this.lineNum,this.line,w]):this.errors.push([this.lineNum,this.line,N]):this.errors.push([this.lineNum,this.line,k])}},{key:"createAssertionsFromParsedValues",value:function(e,t){if(this.curNode){var n,r=Object(d.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value,s=a;a instanceof Object&&(s=R.getNode(A[a.ns]+":"+a.ref),"dcid"===A[a.ns]&&(s.setDCID(a.ref)||this.errors.push([this.lineNum,this.line,x]))),new M(this.curNode,e,s,this.prov)}}catch(i){r.e(i)}finally{r.f()}}else this.errors.push([this.lineNum,this.line,j])}},{key:"parseLine",value:function(e){if(D(e=e.trim()))if(e.includes(":")){var t=e.split(":",1)[0].trim(),n=e.substring(e.indexOf(":")+1).trim();if(t){if(n){var r=this.parsePropValues(n);switch(t){case"Node":this.setCurNode(r);break;case"dcid":this.setCurNodeDCID(r);break;default:this.createAssertionsFromParsedValues(t,r)}}}else this.errors.push([this.lineNum,this.line,C])}else this.errors.push([this.lineNum,this.line,O])}},{key:"parseMcfStr",value:function(t){var n=this,r=t.split("\n");return this.lineNum=1,r.forEach((function(e){n.line=e,n.parseLine(e),n.lineNum++})),{localNodes:Object.keys(e.localNodeHash),errMsgs:this.errors}}}],[{key:"readFile",value:function(t){var n=new FileReader;return n.readAsText(t),new Promise((function(r,a){n.addEventListener("loadend",(function(a){var s=new e(t.name);r(s.parseMcfStr(n.result))})),n.addEventListener("error",a)}))}}]),e}();P.localNodeHash={};var K=n(24);function V(e){var t=e.match("C:(.*)->(.*)");return t?t[0]:null}function G(e){var t=e.match("E:(.*)->(.*)");return t?t[0]:null}var W=function(){function e(){Object(h.a)(this,e),this.csvIndex=-1}return Object(p.a)(e,[{key:"getLocalIdFromEntityId",value:function(e){return e?e.replace("->","_").replace("E:","")+"_R"+this.csvIndex:null}},{key:"fillPropertyValues",value:function(e,t){var n,r=[],a=Object(d.a)(e.split(","));try{for(a.s();!(n=a.n()).done;){var s=n.value,i=void 0,c=G(s),l=V(s);if(c){var o="l:"+this.getLocalIdFromEntityId(c);i=s.replace(c,o)}else if(l){var u=l.split("->")[1];i=s.replace(l,t[u])}else i=s;r.push(i)}}catch(h){a.e(h)}finally{a.f()}return r.join(",")}},{key:"fillTemplateFromRow",value:function(e,t){var n,r=[],a=Object(d.a)(e.split("\n"));try{for(a.s();!(n=a.n()).done;){var s=n.value;if(s.trim()&&D(s)){var i=s.split(":")[0].trim(),c=s.substring(s.indexOf(":")+1).trim();if("Node"===i){if(c.includes(","))throw new Error("cannot have multiple ids for Node declaration");var l=G(c);l?r.push(i+": "+this.getLocalIdFromEntityId(l)):r.push(i+": "+c)}else{var o=this.fillPropertyValues(c,t);r.push(i+": "+o)}}else r.push("")}}catch(u){a.e(u)}finally{a.f()}return r.join("\n")}},{key:"csvToMcf",value:function(e,t){this.csvIndex=1;var n,r=[],a=Object(d.a)(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;r.push(this.fillTemplateFromRow(e,s)),this.csvIndex+=1}}catch(i){a.e(i)}finally{a.f()}return r.join("\n")}},{key:"readCsvFile",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FileReader).readAsText(n),e.abrupt("return",new Promise((function(e,n){r.addEventListener("loadend",(function(n){K().fromString(r.result).then((function(n){e(a.csvToMcf(t,n))}))})),r.addEventListener("error",n)})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}],[{key:"readTmcfFile",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FileReader).readAsText(t),e.abrupt("return",new Promise((function(e,t){n.addEventListener("loadend",(function(t){e(n.result)})),n.addEventListener("error",t)})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"generateMcf",value:function(){var t=Object(u.a)(l.a.mark((function t(n,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.readTmcfFile(n).then((function(t){return(new e).readCsvFile(t,r)})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}]),e}();function J(){return(J=Object(u.a)(l.a.mark((function e(t){var n,r,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),n=null,r={errMsgs:[],localNodes:[]},a=Object(d.a)(t),e.prev=4,i=l.a.mark((function e(){var t,a,i,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.value,"mcf"!==(a=t.name.split(".").pop())){e.next=11;break}return e.next=5,P.readFile(t);case 5:i=e.sent,console.log(i),i.errMsgs.length>0&&(r.errMsgs=r.errMsgs.concat({file:t.name,errs:i.errMsgs})),r.localNodes=r.localNodes.concat(i.localNodes),e.next=23;break;case 11:if("tmcf"!==a){e.next=15;break}n=t,e.next=23;break;case 15:if(!n){e.next=22;break}return c=n,e.next=19,W.generateMcf(n,t).then((function(e){return console.log(e),new P(c.name+"&"+t.name).parseMcfStr(e)}));case 19:(o=e.sent).errMsgs.length>0&&(r.errMsgs=r.errMsgs.concat({file:c.name,errs:o.errMsgs})),r.localNodes=r.localNodes.concat(o.localNodes);case 22:n=null;case 23:case"end":return e.stop()}}),e)})),a.s();case 7:if((s=a.n()).done){e.next=11;break}return e.delegateYield(i(),"t0",9);case 9:e.next=7;break;case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(4),a.e(e.t1);case 16:return e.prev=16,a.f(),e.finish(16);case 19:return e.abrupt("return",r);case 20:case"end":return e.stop()}}),e,null,[[4,13,16,19]])})))).apply(this,arguments)}function Y(e,t){var n=R.getNode(e);return t&&n.setDCID(e.replace("dcid:","")),n}function q(e){return $.apply(this,arguments)}function $(){return($=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(!t.existsInKG){e.next=4;break}return e.abrupt("return","exist-in-kg");case 4:return e.abrupt("return",t.setExistsInKG().then((function(){return t.existsInKG?"exist-in-kg":!t.dcid&&t.localId&&t.localId in P.localNodeHash?"exist-in-local":t.dcid||t.localId in P.localNodeHash?"not-in-kg":"not-in-local"})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _={"exist-in-kg":"Node has dcid that exists in DC KG","exist-in-local":"Node has resolved local reference and no dcid","not-in-local":"Node has unresolved local reference and no dcid","not-in-kg":"Node has dcid which does not exist in DC KG"};function z(e,t){t.includes(":")?window.location.hash=e+"&id="+t:window.location.hash=e+"&id=dcid:"+t}function B(e){window.location.hash=e}function Q(e){e.startsWith("https")&&window.open(e)}var X=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={tableRows:null,loading:!0},r}return Object(p.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this;e.triples!==this.props.triples&&(this.setState({loading:!0}),this.getTripleRows().then((function(e){t.setState({tableRows:e,loading:!1})})))}},{key:"getTargetCell",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t,!R.isNode(s)){e.next=5;break}return e.next=3,q(t);case 3:return n=e.sent,e.abrupt("return",a.a.createElement("div",null,a.a.createElement("span",{title:_[n]},a.a.createElement("p",{className:"clickable "+n,onClick:function(){return r.props.goToId(t.localId||t.dcid)}},t.getRef()))));case 5:return e.abrupt("return",a.a.createElement("p",null,t));case 6:case"end":return e.stop()}var s}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getProvenanceCell",value:function(e){var t=this;if(e.startsWith("dc/"))return a.a.createElement("p",{className:"clickable dc-provenance",onClick:function(){return t.props.goToId(e)}},e);if(!e.startsWith("https"))return a.a.createElement("p",null,e.replace("&",", "));if(!e.includes("&"))return a.a.createElement("p",{className:"clickable",onClick:function(){return Q(e)}},e.split("/").pop());var n,r=[],s=[],i=Object(d.a)(e.split("&"));try{for(i.s();!(n=i.n()).done;){var c=n.value;r.push(c),s.push(c.split("/").pop())}}catch(l){i.e(l)}finally{i.f()}return a.a.createElement("div",null,a.a.createElement("p",{className:"clickable",onClick:function(){return Q(r[0])}},s[0]),a.a.createElement("p",null,",","\xa0"),a.a.createElement("p",{className:"clickable",onClick:function(){return Q(r[1])}},s[1]))}},{key:"getTripleRows",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,r,s,i,c,o,u,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=0,r=Object(d.a)(this.props.triples),e.prev=3,r.s();case 5:if((s=r.n()).done){e.next=18;break}return i=s.value,c=this.props.inverse?i.src:i.target,e.next=10,this.getTargetCell(c);case 10:o=e.sent,u=this.getProvenanceCell(i.provenance),h=void 0,i.provenance.startsWith("dc/")||(h="bold"),t.push(a.a.createElement("tr",{className:h,key:n},a.a.createElement("td",null,i.property),a.a.createElement("td",null,o),a.a.createElement("td",null,u))),n+=1;case 16:e.next=5;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(3),r.e(e.t0);case 23:return e.prev=23,r.f(),e.finish(23);case 26:return e.abrupt("return",t);case 27:case"end":return e.stop()}}),e,this,[[3,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return null;var e=this.props.inverse?a.a.createElement("tr",null,a.a.createElement("th",null,"Property"),a.a.createElement("th",null,"Source"),a.a.createElement("th",null,"Provenance")):a.a.createElement("tr",null,a.a.createElement("th",null,"Property"),a.a.createElement("th",null,"Target"),a.a.createElement("th",null,"Provenance"));return a.a.createElement("table",null,a.a.createElement("thead",null,e),a.a.createElement("tbody",null,this.state.tableRows))}}]),n}(r.Component),Z=function(e){return e.loading?a.a.createElement("div",{className:"centered col"},a.a.createElement("br",null),a.a.createElement("div",{className:"loadingSpinner"}),a.a.createElement("h2",null,e.msg)):null},ee=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={ref:null,asserts:[],invAsserts:[],fetching:!0},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setNodeData()}},{key:"componentDidUpdate",value:function(e){e.node!==this.props.node&&this.setNodeData()}},{key:"setNodeData",value:function(){var e=this,t=this.props.node;this.setState({ref:t.getRef(),fetching:!0,asserts:[],invAsserts:[],elemClass:""}),q(t).then((function(t){e.setState({elemClass:t})})),t.fetchRemoteData().then((function(){e.setState({asserts:t.assertions,invAsserts:t.invAssertions,fetching:!1})}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement("h1",{className:"inline"},"Currently Viewing: "),a.a.createElement("span",{title:_[this.state.elemClass]},a.a.createElement("h1",{className:"inline "+this.state.elemClass},this.state.ref)),a.a.createElement("br",null),a.a.createElement(Z,{loading:this.state.fetching,msg:"...fetching triples..."}),a.a.createElement("br",null),a.a.createElement("h3",{className:"inline padded"},"Node Properties"),a.a.createElement("p",{className:"inline"}," - current node is source"),a.a.createElement("br",null),a.a.createElement(X,{triples:this.state.asserts,inverse:!1,goToId:this.props.goToId}),a.a.createElement("br",null),a.a.createElement("h3",{className:"inline padded"},"Incoming Properties from Other Nodes"),a.a.createElement("p",{className:"inline"}," - current node is target"),a.a.createElement("br",null),a.a.createElement(X,{triples:this.state.invAsserts,inverse:!0,goToId:this.props.goToId}))}}]),n}(r.Component),te=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={searchVal:""},r}return Object(p.a)(n,[{key:"handleSearch",value:function(e){13===e.keyCode&&(this.props.searchId(e.target.value),this.setState({searchVal:""}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Header"},a.a.createElement("button",{className:"button",onClick:this.props.onHomeClick},"Return Home"),a.a.createElement("input",{type:"search",list:"subjIds",placeholder:"Search by id",value:this.state.searchVal,onChange:function(t){return e.setState({searchVal:t.target.value})},onKeyUp:function(t){e.handleSearch(t)}}),a.a.createElement("datalist",{id:"subjIds"},this.props.subjIds.map((function(e){return a.a.createElement("option",{value:e,key:e})}))))}}]),n}(r.Component),ne=function(e){return e.errsList.length?a.a.createElement("div",{className:"box"},a.a.createElement("h3",null,"Parsing Errors"),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"File Name"),a.a.createElement("th",null,"Line Num"),a.a.createElement("th",null,"Line"),a.a.createElement("th",null,"Error Message"))),a.a.createElement("tbody",null,e.errsList.map((function(e){return e.errs.map((function(t){return a.a.createElement("tr",{key:t[0]},a.a.createElement("td",null,e.file),a.a.createElement("td",null,t[0]),a.a.createElement("td",null,t[1]),a.a.createElement("td",null,t[2]))}))}))))):null},re=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={mcfTmcfUrl:"",csvUrl:""},r}return Object(p.a)(n,[{key:"handleUrlKeyUp",value:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==t.keyCode){e.next=15;break}if("mcf"!==this.state.mcfTmcfUrl.split(".").pop()){e.next=9;break}return e.next=4,this.props.loadFiles([this.state.mcfTmcfUrl]);case 4:this.setState({csvUrl:"",mcfTmcfUrl:""}),this.props.goToHome(),this.props.toggle(),e.next=15;break;case 9:if("tmcf"!==this.state.mcfTmcfUrl.split(".").pop()||"csv"!==this.state.csvUrl.split(".").pop()){e.next=15;break}return e.next=12,this.props.loadFiles([this.state.mcfTmcfUrl,this.state.csvUrl]);case 12:this.setState({csvUrl:"",mcfTmcfUrl:""}),this.props.goToHome(),this.props.toggle();case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"centered col"},a.a.createElement("h4",null,"Choose file(s) to upload:"),a.a.createElement("label",{className:"button"},a.a.createElement("input",{type:"file",required:!0,multiple:!0,accept:".mcf",onChange:function(t){e.props.upload(Array.from(t.target.files)),e.props.toggle()}}),"Upload MCF"),a.a.createElement("label",{className:"button"},a.a.createElement("input",{type:"file",required:!0,multiple:!0,accept:".tmcf,.csv",onChange:function(t){e.props.upload(Array.from(t.target.files)),e.props.toggle()}}),"Upload TMCF + CSV")),a.a.createElement("div",{className:"centered col"},a.a.createElement("h3",null,"-OR-")),a.a.createElement("div",{className:"centered col"},a.a.createElement("h4",null,"Enter URL(s):"),a.a.createElement("div",{className:"col url-entry"},a.a.createElement("label",null,"MCF / TMCF:",a.a.createElement("input",{type:"text",value:this.state.mcfTmcfUrl,onChange:function(t){return e.setState({mcfTmcfUrl:t.target.value})},onKeyUp:function(t){return e.handleUrlKeyUp(t)}})),a.a.createElement("label",null,"CSV:",a.a.createElement("input",{type:"text",placeholder:"leave blank for mcf files",value:this.state.csvUrl,onChange:function(t){return e.setState({csvUrl:t.target.value})},onKeyUp:function(t){return e.handleUrlKeyUp(t)}})))))}}]),n}(r.Component),ae=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={dropdown:!1},r}return Object(p.a)(n,[{key:"toggleDropdown",value:function(){this.setState({dropdown:!this.state.dropdown})}},{key:"render",value:function(){var e,t,n=this;return 0===this.props.fileList.length?a.a.createElement("div",{className:"home centered col"},a.a.createElement("div",{className:"box "},a.a.createElement(re,{upload:this.props.upload,loadFiles:this.props.loadFiles,goToHome:this.props.goToHome,toggle:function(){}}))):(this.state.dropdown?(e="button expanded",t="Add File (-)"):(e="button",t="Add File (+)"),a.a.createElement("div",{className:"centered col"},a.a.createElement("div",{className:"box"},a.a.createElement("h3",null,"Current Files"),a.a.createElement("ul",null,this.props.fileList.map((function(e,t){var n=e.name.startsWith("https:")?"clickable":"";return a.a.createElement("li",{onClick:function(){n&&Q(e.name)},className:n,key:e.name+t},e.name)}))),a.a.createElement("br",null),a.a.createElement("button",{className:"button",onClick:this.props.clear},"Clear"),a.a.createElement("button",{className:e,onClick:function(){return n.toggleDropdown()}},t),this.state.dropdown?a.a.createElement(re,{upload:this.props.upload,loadFiles:this.props.loadFiles,goToHome:this.props.goToHome,toggle:function(){return n.toggleDropdown()}}):null),a.a.createElement("br",null),a.a.createElement(ne,{errsList:this.props.errs}),a.a.createElement("br",null),a.a.createElement("div",{className:"box"},a.a.createElement(Z,{loading:this.props.loading,msg:"...loading mcf..."}),a.a.createElement("h3",null,"Subject Nodes"),a.a.createElement("ul",null,this.props.subjNodes.map((function(e){return a.a.createElement("li",{className:"clickable",key:e,onClick:function(){return n.props.goToId(e)}},e)}))))))}}]),n}(r.Component),se=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={subjNodes:[],curNode:null,files:[],loading:!1,firstLoad:!0,parsingErrs:[],fileHash:"#"},r.initialState=r.state,r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){return e.handleHashChange()}),!1),this.state.firstLoad&&(this.parseUrl(),this.setState({firstLoad:!1}))}},{key:"handleHashChange",value:function(){var e=null,t=new URLSearchParams(window.location.hash.split("#")[1]),n=t.get("id");n?e=Y(n,!1):(n=t.get("search"))&&(e=Y(n,!0)),this.setState({curNode:e})}},{key:"parseUrl",value:function(){var e=new URLSearchParams(window.location.hash.trim("#")),t=e.getAll("file");if(t.length)this.loadRemoteFiles(t);else{var n=e.get("search");if(n){var r=Y(n,!0);this.setState({curNode:r})}}}},{key:"appendfileHash",value:function(e){var t,n=this.state.fileHash,r=Object(d.a)(e);try{for(r.s();!(t=r.n()).done;){n+="&file="+t.value}}catch(a){r.e(a)}finally{r.f()}this.setState({fileHash:n})}},{key:"loadRemoteFiles",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r,a,s,i=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.appendfileHash(t),n=[],r=Object(d.a)(t),e.prev=3,s=l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.value,e.next=3,b.a.request({url:t,method:"GET",responseType:"blob"});case 3:(r=e.sent).data.name=t,n.push(r.data),i.setState((function(e){return{files:[].concat(Object(o.a)(e.files),[r.data])}}));case 7:case"end":return e.stop()}}),e)})),r.s();case 6:if((a=r.n()).done){e.next=10;break}return e.delegateYield(s(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),r.e(e.t1);case 15:return e.prev=15,r.f(),e.finish(15);case 18:this.submitFileList(n);case 19:case"end":return e.stop()}}),e,this,[[3,12,15,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"uploadFiles",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r,a,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(d.a)(t),e.prev=1,a=l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.value,e.next=3,s.setState((function(e){return{files:[].concat(Object(o.a)(e.files),[t])}}));case 3:case"end":return e.stop()}}),e)})),n.s();case 4:if((r=n.n()).done){e.next=8;break}return e.delegateYield(a(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),n.e(e.t1);case 13:return e.prev=13,n.f(),e.finish(13);case 16:this.submitFileList(t);case 17:case"end":return e.stop()}}),e,this,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}()},{key:"submitFileList",value:function(e){var t=this;this.setState({loading:!0}),function(e){return J.apply(this,arguments)}(e).then((function(e){t.setState((function(t){return{parsingErrs:t.parsingErrs.concat(e.errMsgs),subjNodes:e.localNodes,loading:!1}}),(function(){return t.handleHashChange()}))}))}},{key:"onClearPress",value:function(){this.setState(this.initialState),R.nodeHash={},P.localNodeHash={},B("")}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"app"},a.a.createElement(te,{subjIds:this.state.subjNodes,onHomeClick:function(){return B(e.state.fileHash)},searchId:function(t){return function(e,t){t.includes(":")?window.location.hash=e+"&search="+t:window.location.hash=e+"&search=dcid:"+t}(e.state.fileHash,t)}}),this.state.curNode?a.a.createElement(ee,{node:this.state.curNode,goToId:function(t){return z(e.state.fileHash,t)}}):a.a.createElement(ae,{fileList:this.state.files,clear:function(){return e.onClearPress()},errs:this.state.parsingErrs,loading:this.state.loading,subjNodes:this.state.subjNodes,upload:function(t){return e.uploadFiles(t)},goToId:function(t){return z(e.state.fileHash,t)},loadFiles:function(t){return e.loadRemoteFiles(t)},goToHome:function(){return B(e.state.fileHash)}}))}}]),n}(r.Component);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(se,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1123ec17.chunk.js.map
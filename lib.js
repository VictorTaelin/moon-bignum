module.exports = (()=>{"use strict";var $F=(a)=>typeof a==="function"?1:0,$S=(a)=>typeof a==="string"?1:0,$N=(a)=>typeof a==="number"?1:0,$O=(a)=>typeof a==="object"&&!a.__?1:0,$U=undefined,$V=undefined;return (()=>{var _zb2rho5CzE1Zh3ow4rqLZyVRkJio4WVUL82pMivFeAXTKkfvA=(_a=>(_b=>(()=>{var _md=Math.pow(2,16);var _al=_a((_u16=>(_v0=>(1+_v0))))(0);var _bl=_b((_u16=>(_v0=>(1+_v0))))(0);var _xs=((_al>_bl?1:0)?_a:_b);var _ys=((_al>_bl?1:0)?_b:_a)((_y=>(_ys=>(_c=>(_n=>_c(_y)(_ys))))))((_c=>(_n=>_n)));return (_cons=>(_nil=>_xs((_x=>(_xst=>(_ys=>(_c=>(()=>{var _y=_ys((_y=>(_ys=>_y)))(0);var _yst=_ys((_y=>(_ys=>_ys)))((_c=>(_n=>_n)));var _sum=(_x+(_y+_c));var _val=(_sum%_md);var _cur=Math.floor((_sum/_md));return _cons(_val)(_xst(_yst)(_cur))})())))))((_ys=>(_c=>((_c>0?1:0)?_cons(_c)(_nil):_nil))))(_ys)(0)))})()));var _zb2rhgr3EHmgEAgPo4gLfb1fmZ4gTUhfAYhW8U7n7mppBLjw7=(_xs=>_xs((_h=>(_t=>(_cons=>(_nil=>_cons(_h)(_t))))))((_cons=>(_nil=>_nil))));var _zb2rhkH6wBoLYQ2nJZR5EeubQ3dK3n8F3NfDUbRmydswbae2C=(()=>{var _listMatch=_zb2rhgr3EHmgEAgPo4gLfb1fmZ4gTUhfAYhW8U7n7mppBLjw7;return (_a=>(_b=>_a((_x=>(_xs=>(_b=>(_c=>(_r=>(()=>{var _y=_b((_y=>(_ys=>_y)))(0);var _ys=_b((_y=>(_ys=>_ys)))((_c=>(_n=>_n)));var _dif=((_x-_y)-_c);var _val=((_dif<0?1:0)?(_dif+Math.pow(2,16)):_dif);var _car=((_dif<0?1:0)?1:0);var _res=(_c=>(_n=>_r(_c)(_c(_val)(_n))));return _xs(_ys)(_car)(_res)})()))))))((_b=>(_c=>(_r=>_b((_y=>(_ys=>(_c=>(_n=>_n)))))(((_c>0?1:0)?(_c=>(_n=>_c(0)(_n))):_r))))))(_listMatch(_b))(0)((_c=>(_n=>_n)))))})();var _zb2rhgV8FTZ5RDjzugq2CUjVchGzePkQSQuqXvGuDtHgP7aaK=(_list=>(_c=>(_n=>_list((_h=>(_t=>(_i=>_c(String(_i))(_h)(_t((_i+1)))))))((_i=>_c("length")(_i)(_n)))(0)))(k=>v=>a=>(a[k]=v,a))({}));var _zb2rhmmjgCisMdEevm8iM53Rg1kWraiTsbyLuQwTajy1ZHyV6=(()=>{var _listToArray=_zb2rhgV8FTZ5RDjzugq2CUjVchGzePkQSQuqXvGuDtHgP7aaK;return (_aList=>(_bList=>(()=>{var _md=Math.pow(2,16);var _a=_listToArray(_aList);var _b=_listToArray(_bList);var _al=(($V=_a["length"])!==$U?$V:undefined);var _bl=(($V=_b["length"])!==$U?$V:undefined);var _ini=({"car":0,"res":(_c=>(_n=>_n))});var _res=((i,j,x,f)=>{f=(_i=>(_state=>(()=>{var _car=(($V=_state["car"])!==$U?$V:undefined);var _res=(($V=_state["res"])!==$U?$V:undefined);var _sum=((i,j,x,f)=>{f=(_j=>(_sum=>(()=>{var _n=(_i-_j);var _m=((_bl-_j)-1);var _x=((_n<0?1:0)?0:((_n<_al?1:0)?(($V=_a[String(_n)])!==$U?$V:undefined):0));var _y=(($V=_b[String(_j)])!==$U?$V:undefined);return ((_x*_y)+_sum)})()));x=0;for(i=0,j=_bl;i<j;++i){x=f(i)(x);};return x;})();var _tot=(_sum+_car);return ({"car":Math.floor((_tot/_md)),"res":(_c=>(_n=>_res(_c)(_c((_tot%_md))(_n))))})})()));x=_ini;for(i=0,j=(_al+_bl);i<j;++i){x=f(i)(x);};return x;})();return (($V=_res["res"])!==$U?$V:undefined)})()))})();var _zb2rheYfDrgCazTf5KETbxn3UniU4uTA9WTbX7rvXXpn58Ugh=(()=>{var _listMatch=_zb2rhgr3EHmgEAgPo4gLfb1fmZ4gTUhfAYhW8U7n7mppBLjw7;var _Gtn=(_g=>(_e=>(_l=>_g)));var _Eql=(_g=>(_e=>(_l=>_e)));var _Ltn=(_g=>(_e=>(_l=>_l)));var _compare=(_x=>(_y=>(_c=>((_x>_y?1:0)?_Gtn:((_x<_y?1:0)?_Ltn:_c)))));return (_a=>(_b=>(()=>{var _xs=_a;var _ys=_listMatch(_b);return _xs((_x=>(_xs=>(_b=>(_r=>(()=>{var _y=_b((_y=>(_ys=>_y)))(0);var _ys=_b((_y=>(_ys=>_ys)))((_c=>(_n=>_n)));return _xs(_ys)(_compare(_x)(_y)(_r))})())))))((_b=>(_r=>(()=>{var _x=0;var _y=_b((_y=>(_ys=>_y)))(0);return _compare(_x)(_y)(_r)})())))(_ys)(_Eql)})()))})();var _zb2rhmDPPeiMAsg7JEw7v1Sh9c1TtSJQtk6bMGHkkX6FbEEqA=(()=>{var _bigCmp=_zb2rheYfDrgCazTf5KETbxn3UniU4uTA9WTbX7rvXXpn58Ugh;return (_a=>(_b=>_bigCmp(_a)(_b)(0)(1)(0)))})();var _zb2rhXKeedDmWEnTU43CQN2kspBaumzNigt2LESzTCn8RaQuA=(()=>{var _bigCmp=_zb2rheYfDrgCazTf5KETbxn3UniU4uTA9WTbX7rvXXpn58Ugh;return (_a=>(_b=>_bigCmp(_a)(_b)(1)(0)(0)))})();var _zb2rhbzwaPbscoHkRwubEejEaLrsVzbgZFrGLh15mbczHv4ib=(()=>{var _bigCmp=_zb2rheYfDrgCazTf5KETbxn3UniU4uTA9WTbX7rvXXpn58Ugh;return (_a=>(_b=>_bigCmp(_a)(_b)(0)(0)(1)))})();var _zb2rhbWCYXz8UCecHPTry55w8vBzhE4iu87iwVXqmfTddWzRe=(()=>{var _comment="Reason: fast";return (_num=>((_num===0?1:0)?"0":((_num===1?1:0)?"1":((_num===2?1:0)?"2":((_num===3?1:0)?"3":((_num===4?1:0)?"4":((_num===5?1:0)?"5":((_num===6?1:0)?"6":((_num===7?1:0)?"7":((_num===8?1:0)?"8":((_num===9?1:0)?"9":((_num===10?1:0)?"a":((_num===11?1:0)?"b":((_num===12?1:0)?"c":((_num===13?1:0)?"d":((_num===14?1:0)?"e":((_num===15?1:0)?"f":"0")))))))))))))))))})();var _zb2rhYKrii1qkbdcBSin6irUSzWGboXBqJa7XtwaNiGu3ekJj=(()=>{var _numToNib=_zb2rhbWCYXz8UCecHPTry55w8vBzhE4iu87iwVXqmfTddWzRe;var _u16ToHex=(_u16=>((i,j,x,f)=>{f=(_i=>(()=>{var _num=(Math.floor((_u16/Math.pow(16,_i)))%16);return (_v0=>(_numToNib(_num)+_v0))})());x="";for(i=0,j=4;i<j;++i){x=f(i)(x);};return x;})());return (_big=>(()=>{var _chars=_big((_u16=>(_hex=>(_hex+_u16ToHex(_u16)))))("");var _res=((i,j,x,f)=>{f=(_i=>(_res0=>(()=>{var _char=((a,b,c)=>b===c-1?a[b]||'':a.substring(b,c))(_chars,_i,(_i+1));var _res1=(_res0+_char);return (_res1==="0x0"?"0x":_res1)})()));x="0x";for(i=0,j=(_chars.length);i<j;++i){x=f(i)(x);};return x;})();return (_res==="0x"?"0x0":_res)})())})();var _zb2rhadpYJs36VGcrbN1TPXkXiwZL2LLPMRL6uwSD2fki3cho=(()=>{var _comment="Reason: fast";return (_char=>(_char==="0"?0:(_char==="1"?1:(_char==="2"?2:(_char==="3"?3:(_char==="4"?4:(_char==="5"?5:(_char==="6"?6:(_char==="7"?7:(_char==="8"?8:(_char==="9"?9:(_char==="a"?10:(_char==="b"?11:(_char==="c"?12:(_char==="d"?13:(_char==="e"?14:(_char==="f"?15:0)))))))))))))))))})();var _zb2rhZyg6pdBwSsGrHPUZEpTrv3eGQ1pRM9hbuhJJRNXuNYd4=(()=>{var _nibToNum=_zb2rhadpYJs36VGcrbN1TPXkXiwZL2LLPMRL6uwSD2fki3cho;var _getU4=(_hex=>(_n=>(_m=>(()=>{var _start=((((_hex.length)+1)%4)-1);var _i=((_start+(_n*4))+(3-_m));return _nibToNum(((a,b,c)=>b===c-1?a[b]||'':a.substring(b,c))(_hex,_i,(_i+1)))})())));var _getU16=(_hex=>(_n=>(()=>{var _a=(_getU4(_hex)(_n)(0)*1);var _b=(_getU4(_hex)(_n)(1)*16);var _c=(_getU4(_hex)(_n)(2)*256);var _d=(_getU4(_hex)(_n)(3)*4096);return (_a+(_b+(_c+(_d+0))))})()));var _ceil=(_x=>(()=>{var _f=Math.floor(_x);return ((_x===_f?1:0)?_f:(_f+1))})());return (_hex=>(_cons=>(_nil=>(()=>{var _u16s=_ceil((((_hex.length)-2)/4));return ((i,j,x,f)=>{f=(_n=>_cons(_getU16(_hex)(_n)));x=_nil;for(i=0,j=_u16s;i<j;++i){x=f(i)(x);};return x;})()})())))})();var _zb2rhYicog3wophhiMHETgWFzxz3srMk9MuSqjVhpv2mY6ZFe=(()=>{var _listMatch=_zb2rhgr3EHmgEAgPo4gLfb1fmZ4gTUhfAYhW8U7n7mppBLjw7;return (_a=>(_b=>_a((_x=>(_xs=>(_b=>(_c=>(_r=>(()=>{var _y=_b((_y=>(_ys=>_y)))(0);var _ys=_b((_y=>(_ys=>_ys)))((_c=>(_n=>_n)));var _dif=((_x-_y)-_c);var _val=((_dif<0?1:0)?(_dif+Math.pow(2,16)):_dif);var _car=((_dif<0?1:0)?1:0);var _res=(_c=>(_n=>_r(_c)(_c(_val)(_n))));return _xs(_ys)(_car)(_res)})()))))))((_b=>(_c=>(_r=>((_c>0?1:0)?(_cons=>(_nil=>_cons(0)(_nil))):_r)))))(_listMatch(_b))(0)((_cons=>(_nil=>_nil)))))})();var _zb2rhijkwV5H4zWV2JcEN6ZUMPsGkaUqLBEfJ19SjAVJPFF63=(()=>{var _bigCmp=_zb2rheYfDrgCazTf5KETbxn3UniU4uTA9WTbX7rvXXpn58Ugh;var _bigMul=_zb2rhmmjgCisMdEevm8iM53Rg1kWraiTsbyLuQwTajy1ZHyV6;var _bigSub=_zb2rhYicog3wophhiMHETgWFzxz3srMk9MuSqjVhpv2mY6ZFe;var _findDigit=(_a=>(_b=>(()=>{var _state=({"add":Math.pow(2,16),"mul":Math.pow(2,16)});var _result=((i,j,x,f)=>{f=(_i=>(_state=>(()=>{var _add0=(($V=_state["add"])!==$U?$V:undefined);var _mul0=(($V=_state["mul"])!==$U?$V:undefined);var _mult=_bigMul(_b)((_cons=>(_nil=>_cons(_mul0)(_nil))));var _add1=(_add0/2);var _mul1=_bigCmp(_mult)(_a)((_v0=>(_v1=>(_v0-_v1))))((_a=>(_b=>_a)))((_v0=>(_v1=>(_v0+_v1))))(_mul0)(_add1);return ({"mul":_mul1,"add":_add1})})()));x=_state;for(i=0,j=17;i<j;++i){x=f(i)(x);};return x;})();return Math.floor((($V=_result["mul"])!==$U?$V:undefined))})()));return (_a=>(_b=>_a((_digit=>(_state=>(()=>{var _rem=(_c=>(_n=>_c(_digit)((($V=_state["rem"])!==$U?$V:undefined)(_c)(_n))));var _dig=_findDigit(_rem)(_b);var _quo=(_c=>(_n=>_c(_dig)((($V=_state["quo"])!==$U?$V:undefined)(_c)(_n))));var _dif=_bigMul(_b)((_c=>(_n=>_c(_dig)(_n))));return ({"rem":_bigSub(_rem)(_dif),"quo":_quo})})())))(({"rem":(_c=>(_n=>_n)),"quo":(_c=>(_n=>_n))}))))})();var _zb2rhkuFPS4ubd8FFtCBoThXzZ7Pv8YNcHeQoY2vkjaJc8N1e=(()=>{var _bigQtr=_zb2rhijkwV5H4zWV2JcEN6ZUMPsGkaUqLBEfJ19SjAVJPFF63;return (_a=>(_b=>(($V=_bigQtr(_a)(_b)["rem"])!==$U?$V:undefined)))})();var _zb2rhcndVX5upGRNDkepEkUueaWWgv3CyD6xTTfB6sc9fYZT3=(()=>{var _bigQtr=_zb2rhijkwV5H4zWV2JcEN6ZUMPsGkaUqLBEfJ19SjAVJPFF63;return (_a=>(_b=>(($V=_bigQtr(_a)(_b)["quo"])!==$U?$V:undefined)))})();var _main=({"add":_zb2rho5CzE1Zh3ow4rqLZyVRkJio4WVUL82pMivFeAXTKkfvA,"sub":_zb2rhkH6wBoLYQ2nJZR5EeubQ3dK3n8F3NfDUbRmydswbae2C,"mul":_zb2rhmmjgCisMdEevm8iM53Rg1kWraiTsbyLuQwTajy1ZHyV6,"qtr":_zb2rhijkwV5H4zWV2JcEN6ZUMPsGkaUqLBEfJ19SjAVJPFF63,"mod":_zb2rhkuFPS4ubd8FFtCBoThXzZ7Pv8YNcHeQoY2vkjaJc8N1e,"div":_zb2rhcndVX5upGRNDkepEkUueaWWgv3CyD6xTTfB6sc9fYZT3,"cmp":_zb2rheYfDrgCazTf5KETbxn3UniU4uTA9WTbX7rvXXpn58Ugh,"eql":_zb2rhmDPPeiMAsg7JEw7v1Sh9c1TtSJQtk6bMGHkkX6FbEEqA,"gtn":_zb2rhXKeedDmWEnTU43CQN2kspBaumzNigt2LESzTCn8RaQuA,"ltn":_zb2rhbzwaPbscoHkRwubEejEaLrsVzbgZFrGLh15mbczHv4ib,"hex":_zb2rhYKrii1qkbdcBSin6irUSzWGboXBqJa7XtwaNiGu3ekJj,"big":_zb2rhZyg6pdBwSsGrHPUZEpTrv3eGQ1pRM9hbuhJJRNXuNYd4});return _main})()})()

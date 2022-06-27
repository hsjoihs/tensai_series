//rootData
/*
	idリスト
	cx_y:(x,y)座標。原点(1,1)
	ry:y番目の行
	crc:回路ボード
	sym:画像
	*/
	var opn='<table cellspacing=0 cellpadding=0 id="crc">';
	var bord=true;//枠
	var colu=3;//縦
	var rw=2;//横
	var xp,yp;//パス
	var Bstyle="double";
	var Bcolor="green";
	var Bwidth=3;
	var SymDat=["hori","vert","blnk","2crn","3crn","4crn","1crn",
				"crss","div1","div2","div3","div4","sop1",
				"sop2","scl1","scl2","bat1","bat2","bat3",
				"bat4","blb1","blb2","res1","res2","amp1",
				"amp2","vlt1","vlt2","dbt1","dbt2","dbt3","dbt4"];//画像ファイル名
	var userAgent = window.navigator.userAgent.toLowerCase();
	var rootData="";
	function init()//最初の処理
	{
		var data='';
		document.getElementById("versio").innerHTML="回路の天才"+nam+" Ver "+vers;
		var i,j,k;//安全策
		for(i=1;i<=rw;i++)
		{
			data+='<tr id="r'+i+'">';//列マーカー
			for(j=1;j<=colu;j++)
			{
			data+='<td style="border: '+Bwidth+'px '+Bstyle+' '+Bcolor+'" id="c'+j+'_'+i+
			'">'+'<img src="genelec.files/blnk.PNG" width=32 height=32 onclick="Path('+j+","+i+')"></td>';
			rootData+="blnk";
			}
			data+='</tr>';
			rootData+=",";
		}
		
		document.getElementById("crc").innerHTML=opn+data+'</table>';
	//	alert(rootData);
		data='';//初期化
		for(k in SymDat)
		{
			data+='<img src="genelec.files/'+SymDat[k]+'.PNG" width=32'+
			' style="border:1px solid blue" height=32 onclick="AddSym('+k+')"/>';
			if(k%7==6){data+="<br>";}
		}
		document.getElementById("sym").innerHTML=data;
		document.getElementById("two").style.display="none";
		
	/*	if (userAgent.indexOf('msie') != -1) {
		document.frm.ot.value="IE未対応";
		document.frm.ot.disabled="disabled";
		document.frm.thrwup.value="IE未対応";
		document.frm.thrwup.disabled="disabled";
		document.frm.thrwdn.value="IE未対応";
		document.frm.thrwdn.disabled="disabled";
		document.frm.thclup.value="IE未対応";
		document.frm.thclup.disabled="disabled";
		document.frm.thcldn.value="IE未対応";
		document.frm.thcldn.disabled="disabled";

		}*/
	}
	
	function Path(a,b)//パスを入れる.x-y.
	{
		if(!bord){return;}
		xp=a;
		yp=b;//パスを送る
		var i,j;
		for(i=1;i<=colu;i++)
		{
			for(j=1;j<=rw;j++)
			{
				document.getElementById("c"+i+"_"+j).style.borderStyle=Bstyle;
				document.getElementById("c"+i+"_"+j).style.borderColor=Bcolor;
			}
		}
		document.getElementById("c"+a+"_"+b).style.borderStyle="solid";
		document.getElementById("c"+a+"_"+b).style.borderColor="red";
		/*if (userAgent.indexOf('msie') == -1) {*/document.getElementById("two").style.display="block";/*}*/

	}
	
	function AddSym(a)//指定されたパスにaで指定された画像を入れる
	{
		if(xp*yp==0){alert("マスが指定されていないか、枠線が出ていないので編集できません。");return;}
		document.getElementById("c"+xp+"_"+yp).innerHTML='<img src="genelec.files/'+SymDat[a]+'.PNG" width=32 height=32 onclick="Path('+xp+","+yp+')"/>';
		var MT=rootData.split(",");
		MT[yp-1]=MT[yp-1].substr(0,4*xp-4)+SymDat[a]+MT[yp-1].substring(4*xp,MT[yp-1].length);
		rootData=MT+"";
	}
	
	function BordOnOff()//枠線つけたり消したり
	{
		var i,j;//安全対策
		bord=!bord;
		for(i=1;i<=rw;i++)
		{
			for(j=1;j<=colu;j++)
			{
				document.getElementById("c"+j+"_"+i).style.border=(bord*Bwidth)+"px "+Bstyle+" "+Bcolor;
			}
		}
		if(!bord)
		{
			xp=0;yp=0;//枠を消すとパスも消える
			document.getElementById("inpt").style.display="none";
			document.getElementById("one").style.display="none";
			document.getElementById("two").style.display="none";
		}
		else
		{
			document.getElementById("inpt").style.display="block";
			document.getElementById("one").style.display="block";
		}
	}
	
	function BrdRst()
	{
		BordOnOff();
		BordOnOff();
	}
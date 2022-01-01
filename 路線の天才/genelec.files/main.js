/*
	idリスト
	cx_y:(x,y)座標。原点(1,1)
	ry:y番目の行
	crc:回路ボード
	sym:画像
	*/
	var bord=true;//枠
	var colu=3;//縦
	var rw=2;//横
	var xp,yp;//パス
	var Bstyle="double";
	var Bcolor="green";
	var Bwidth=3;
	var SymDat=[
		"0000","0001","0002","0003","0004","0005","0006","0007","0008","0009",
		"0010","0011","0012","0013","0014","0015","0016","0017","0018","0019",
		"0020","0021","0022","0023","0024","0025","0026","0027","0028","0029",
		"0030","0031","0032","0033","0034","0035","0036","0037","0038","0039",
		"0040","0041","0042","0043","0044","0045","0046","0047","0048","0049",
		"0050","0051","0052","0053","0054","0055","0056","0057","0058","0059",
		"0060","0061","0062","0063","0064","0065","0066","0067","0068","0069",
		"0070","0071","0072","0073","0074","0075","0076","0077","0078","0079",
		"0080","0081","0082","0083","0084","0085","0086","0087","0088","0089",
		"0090","0091","0092","0093","0094","0095","0096","0097","0098","0099",
		"0100","0101","0102","0103","0104","0105","0106","0107","0108","0109",
		"0110","0111","0112","0113","0114","0115","0116","0117","0118","0119",
		"0120","0121","0122","0123","0124","0125","0126","0127","0128","0129",
		"0130","0131","0132","0133","0134","0135","0136","0137","0138","0139",
		"0140","0141","0142","0143","0144","0145","0146","0147","0148","0149",
		"0150","0151","0152","0153","0154","0155","0156","0157","0158","0159",
		"0160","0161","0162","0163","0164","0165","0166","0167","0168","0169",
		"0170","0171","0172","0173","0174","0175","0176","0177","0178",

		];//画像ファイル名
	
	function init()//最初の処理
	{
		var data='';
		var i,j,k;//安全策
		for(i=1;i<=rw;i++)
		{
			data+='<tr id="r'+i+'">';//列マーカー
			for(j=1;j<=colu;j++)
			{
			data+='<td style="border: '+Bwidth+'px '+Bstyle+' '+Bcolor+'" id="c'+j+'_'+i+
			'">'+'<img src="genelec.files/0000.PNG" width=32 height=32 onclick="Path('+j+","+i+')"></td>';
			}
			data+='</tr>';
		}
		document.getElementById("crc").innerHTML=data;
		data='';//初期化
		for(k in SymDat)
		{
			data+='<img src="genelec.files/'+SymDat[k]+'.PNG" width=32'+
			' style="border:1px solid blue" height=32 onclick="AddSym('+k+')"/>';
			if(k%20==19){data+="<br>";}
		}
		document.getElementById("sym").innerHTML=data;
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
	}
	
	function AddSym(a)//指定されたパスにaで指定された画像を入れる
	{
		if(xp*yp==0){alert("マスが指定されていないか、枠線が出ていないので編集できません。");return;}
		document.getElementById("c"+xp+"_"+yp).innerHTML='<img src="genelec.files/'+SymDat[a]+'.PNG" width=32 height=32 onclick="Path('+xp+","+yp+')"/>';
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
		if(!bord){xp=0;yp=0;}//枠を消すとパスも消える
	}
	
	function RowUp()//行の追加。一番楽。
	{
		if(!bord){alert("枠線が出ていないので編集できません。");return;}
		var data="";
		rw++;
		i=rw;
		if(!document.getElementById("r"+i))//ないなら
		{
			data+='<tr id="r'+i+'">';//列マーカー
			for(j=1;j<=colu;j++)
			{
				data+='<td style="border: '+Bwidth+'px '+Bstyle+' '+Bcolor+'" id="c'+j+'_'+i+
				'">'+'<img src="genelec.files/0000.PNG" width=32 height=32 onclick="Path('+j+","+i+')"></td>';
			}
			data+='</tr>';
			document.getElementById("crc").innerHTML+=data;//追加
		}
		else
		{
			for(j=1;j<=colu;j++)
			{
				data+='<td style="border: '+Bwidth+'px '+Bstyle+' '+Bcolor+'" id="c'+j+'_'+i+
				'">'+'<img src="genelec.files/0000.PNG" width=32 height=32 onclick="Path('+j+","+i+')"></td>';
			}
			document.getElementById("r"+i).innerHTML=data;
		}
	}
	
	function RowDn()//行の削除。
	{
		if(rw<2)
		{
			alert("残り1行なので削除できません。");return;
		}
		if(confirm("本当に行を削除してよろしいですか？"))
		{
			document.getElementById("r"+rw).innerHTML="";
			document.getElementById("r"+rw).style.border="";
			rw--;
			
		}
		else{return;}
	}
	
	function ColDn()//列の削除
	{
		if(colu<2)
		{
			alert("残り1列なので削除できません。");return;
		}
		if(confirm("本当に列を削除してよろしいですか？"))
		{
			for(i=1;i<=rw;i++)
			{
				document.getElementById("c"+colu+"_"+i).innerHTML="";
				document.getElementById("c"+colu+"_"+i).style.border="";
			}
			colu--;
			
		}
	}
	
	function ColUp()//列の作成
	{
		if(!bord){alert("枠線が出ていないので編集できません。");return;}
		var i;
		var data="";
		colu++;
		j=colu;
		for(i=1;i<=rw;i++)//それぞれの行において
		{
			if(!document.getElementById("c"+j+"_"+i))
			{
				data='<td style="border: '+Bwidth+'px '+Bstyle+' '+Bcolor+'" id="c'+j+'_'+i+
				'">'+'<img src="genelec.files/0000.PNG" width=32 height=32 onclick="Path('+j+","+i+')"></td>';
				document.getElementById("r"+i).innerHTML+=data;//追加
				
			}
			else
			{
				data='<img src="genelec.files/0000.PNG" width=32 height=32 onclick="Path('+j+","+i+')">'
				document.getElementById("c"+j+"_"+i).innerHTML=data;
			}
		}
	}
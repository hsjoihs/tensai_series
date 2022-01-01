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
		"0000","0001","0002","0003","0004","0005","0006","0007","0008","0009","000a","000b","000c","000d","000e","000f",
		"0010","0011","0012","0013","0014","0015","0016","0017","0018","0019","001a","001b","001c","001d","001e","001f"
		/*,		"1000","1001","1002","1003","1010","1011","1012","1013"*/

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
			if(k%16==15){data+="<br>";}
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
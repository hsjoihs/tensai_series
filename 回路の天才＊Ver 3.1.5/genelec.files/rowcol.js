//rootData;
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
				'">'+'<img src="genelec.files/blnk.PNG" width=32 height=32 onclick="Path('+j+","+i+')"></td>';
				rootData+="blnk";
			}
			data+='</tr>';
			document.getElementById("crc").innerHTML+=opn+data+'</table>';//追加
		}
		else
		{
			for(j=1;j<=colu;j++)
			{
				data+='<td style="border: '+Bwidth+'px '+Bstyle+' '+Bcolor+'" id="c'+j+'_'+i+
				'">'+'<img src="genelec.files/blnk.PNG" width=32 height=32 onclick="Path('+j+","+i+')"></td>';
				rootData+="blnk";
			}
			document.getElementById("r"+i).innerHTML=data;
		}
		rootData+=",";
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
			rootData=rootData.split(",");
			rootData[rootData.length-2]="";
			rootData+="";
			rootData=rootData.replace(",,",",");
	//		alert(rootData);
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
			rootData=rootData.replace(/....\,/g,",");
	//		alert(rootData);
			
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
				'">'+'<img src="genelec.files/blnk.PNG" width=32 height=32 onclick="Path('+j+","+i+')"></td>';
				document.getElementById("r"+i).innerHTML+=data;//追加
				
			}
			else
			{
				data='<img src="genelec.files/blnk.PNG" width=32 height=32 onclick="Path('+j+","+i+')">'
				document.getElementById("c"+j+"_"+i).innerHTML=data;
			}
			
			
		}
		rootData=rootData.replace(/\,/g,"blnk$");
		rootData=rootData.replace(/\$/g,",");
		BrdRst();
	}
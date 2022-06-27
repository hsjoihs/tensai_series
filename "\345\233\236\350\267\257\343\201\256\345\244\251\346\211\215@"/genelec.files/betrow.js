function thsRowUp()
{
	if(xp*yp==0){alert("マスが指定されていないか、枠線が出ていないので編集できません。");return;}
	var xx="",m=0;
	
	for(m=0;m<colu;m++)
	{
		xx+="blnk";
	}
	var daat=Save(false)//ユーザーに聞かない
	rw++;
	daat=daat.split(",");
	daat.splice(yp-1,0,xx);
	daat=daat+"";
	Imp(daat,false);
	

}
function thsRowDn()
{
	if(xp*yp==0){alert("マスが指定されていないか、枠線が出ていないので編集できません。");return;}
	if(rw<2){alert("残り1行なので削除できません。");return;}
	if(confirm("本当に行を削除してよろしいですか？"))
	{
		
		var daat=Save(false)//ユーザーに聞かない
		rw--;
		daat=daat.split(",");
		daat[yp-1]="";
		daat=daat+"";
		daat=daat.replace(",,",",");
		Imp(daat,false);
	}
}
function thsColUp()
{
	if(xp*yp==0){alert("マスが指定されていないか、枠線が出ていないので編集できません。");return;}
	var daat=Save(false)//ユーザーに聞かない
	daat=daat.split(",");
	//xp
	var n;
	colu++;
	for(n in daat)
	{
		daat[n]=daat[n].substr(0,4*xp-4)+"blnk"+daat[n].substr(4*xp-4,4*colu-3);
		if(daat[n]=="blnk"){daat[n]="";}//空行
	}
	daat=daat+"";
	Imp(daat,false);
	
}
function thsColDn()
{
	if(xp*yp==0){alert("マスが指定されていないか、枠線が出ていないので編集できません。");return;}
	if(colu<2)
	{
		alert("残り1列なので削除できません。");return;
	}
	
	if(confirm("本当に列を削除してよろしいですか？"))
	{
		
		var daat=Save(false);//ユーザーに聞かない
		colu--;
		daat=daat.split(",");
		//xp
		var n;
		for(n in daat)
		{
			daat[n]=daat[n].substr(0,4*xp-4)+daat[n].substr(4*xp,4*colu+5);
		}
		daat=daat+"";
		
	//	alert(daat);
		Imp(daat,false);
		
	}
}
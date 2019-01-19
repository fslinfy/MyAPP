<?php

function cpjcttlist_pc() {
	$Lid=(int)$_GET["p_l_id"];
	$jclb=$_GET["jclb"];
	if ($jclb=='全部')
	{
		$jclb='';
	}
	$jclb="";
	$ckid=$Lid;//(int)$_GET["ckid"];

	$khid=(int)$_GET["khid"];
	$loc=$_GET["loc"];

	$ny=(int)$_GET["ny"];
	$yu=(int)$_GET["yu"];
	$ri=(int)$_GET["ri"];

	$filter="";
	$sqlstr1="";
	$sqlstr2="";
	$sqlstr3="";
    if (($jclb=="进仓")|| ($jclb=="")) {

		$filter =" and cpjkd.ztbz>2 and YEAR(cpjkd.czrq)=".$ny;

    	if ($yu>0)
    	{
    			$filter .=" and MONTH(cpjkd.czrq)=".$yu;
	    }
    	if ($ri>0)
    	{
    			$filter .=" and DAYOFMONTH(cpjkd.czrq)=".$ri;
	    }


    	
		if ($ckid>0)
		{
			$filter .= " and cpjkd.L_id=".$ckid;
			
		}
		if ($khid>0)
    	{
    		$filter .= " and cpjkd.khid=".$khid;
    	}

	$sqlstr1 = "SELECT '进仓' as jclb
    , `cpjkd`.`khmc`
	,commodity.S_name as cpmc
    , `cpjkdmx`.`jcsl`
    , `cpjkdmx`.`jczl`,
	0 as ccsl,0 as cczl
	, 0 as gfsl, 0 as gfzl
    , 0 as tzsl, 0 as tzzl

    FROM
    `wms`.`cpjkdmx`
	
    INNER JOIN `wms`.`cpjkd` 
        ON (`cpjkdmx`.`jkid` = `cpjkd`.`jkid`)
	INNER JOIN `wms`.`commodity` 
		ON (`cpjkdmx`.`cpid` = `commodity`.`S_id`)	
        where cpjkd.delbz=0  ".$filter;
	}

 	if (($jclb=="出仓")||($jclb=="")) {

   		$filter =" and cpckd.ztbz>2 and YEAR(cpckd.ckrq)=".$ny;

    	if ($yu>0)
    	{
    			$filter .=" and MONTH(cpckd.ckrq)=".$yu;
	    }
    	if ($ri>0)
    	{
    			$filter .=" and DAYOFMONTH(cpckd.ckrq)=".$ri;
	    }
   	
		if ($ckid>0)
		{
			$filter .= " and cpxsd.L_id=".$ckid;
			
		}
		if ($khid>0)
    	{
    		$filter .= " and cpxsd.khid=".$khid;
    	}

	$sqlstr2 = "SELECT '出仓' as jclb
    , `cpxsd`.`khmc`
	,cpxsdmx.cpmc,
	0 as jcsl,0 as jczl
    , `cpckdmx`.`ccsl` as jcsl
    , `cpckdmx`.`cczl` as jczl
	, 0 as gfsl, 0 as gfzl
    , 0 as tzsl, 0 as tzzl
	
	
    FROM
    `wms`.`cpckdmx`
    INNER JOIN `wms`.`cpckd` 
        ON (`cpckdmx`.`ckid` = `cpckd`.`ckid`)
	INNER JOIN `wms`.`cpxsdmx` 
        ON (`cpckdmx`.`xsmxid` = `cpxsdmx`.`mxid`)	
	INNER JOIN `wms`.`cpxsd` 
        ON (`cpckd`.`xsid` = `cpxsd`.`xsid`)	
    where cpckd.delbz=0 ".$filter;
	}

    if (($sqlstr1!="")&&($sqlstr2!=""))
	{
      $sqlstr1.=" union all ".$sqlstr2;
	}
	else{

		if ($sqlstr2!="")
		{
			$sqlstr1=$sqlstr2;
		}
	}    




if (($jclb=="过货")|| ($jclb=="")) {

	    $filter =" and cpgfd.ztbz>0 and YEAR(cpgfd.gfrq)=".$ny;

    	if ($yu>0)
    	{
    			$filter .=" and MONTH(cpgfd.gfrq)=".$yu;
	    }
    	if ($ri>0)
    	{
    			$filter .=" and DAYOFMONTH(cpgfd.gfrq)=".$ri;
	    }
   	

		if ($ckid>0)
		{
			$filter .= " and cpgfd.L_id=".$ckid;
			
		}
		if ($khid>0)
    	{
    		$filter .= " and cpgfd.khid=".$khid;
    	}

	$sqlstr0 = "SELECT '过货' as jclb
    , `cpgfd`.`khmc`
	, cpgfdmx.xmmc as cpmc
	,0 as jcsl,0 as jczl
	,0 as ccsl,0 as cczl
    , `cpgfdmx`.`sl` as gfsl
	, `cpgfdmx`.`zl` as gfzl
	, 0 as tzsl, 0 as tzzl
    FROM
    `wms`.`cpgfdmx`
    INNER JOIN `wms`.`cpgfd` 
        ON (`cpgfdmx`.`gfid` = `cpgfd`.`gfid`)
    where cpgfd.delbz=0  ".$filter;
	}


    if (($sqlstr1!="")&&($sqlstr0!=""))
	{
      $sqlstr1.=" union all ".$sqlstr0;
	}
	else{
		if ($sqlstr0!="")
		{
			$sqlstr1=$sqlstr0;
		}
	}    













  if (($jclb=="其它")|| ($jclb=="")) {

 	    $filter =" and cptzd.khid<> cptzd.newkhid  and cptzd.ztbz>0 and YEAR(cptzd.tzrq)=".$ny;

    	if ($yu>0)
    	{
    			$filter .=" and MONTH(cptzd.tzrq)=".$yu;
	    }
    	if ($ri>0)
    	{
    			$filter .=" and DAYOFMONTH(cptzd.tzrq)=".$ri;
	    }
   	




    	
		if ($ckid>0)
		{
			$filter .= " and cptzd.L_id=".$ckid;
			
		}
		if ($khid>0)
    	{
    		$filter .= " and cptzd.khid=".$khid;
    	}

	$sqlstr3 = "SELECT '其它' as jclb
    , cptzd.khmc
	, cptzdmx.cpmc
    , 0 as jcsl    , 0 as jczl
    , 0 as ccsl    , 0 as cczl
    , 0 as gfsl    , 0 as gfzl
	,cptzdmx.tzsl ,cptzdmx.tzzl 
    FROM
    `wms`.`cptzd`
     INNER JOIN `wms`.`cptzdmx` 
        ON (`cptzd`.`tzid` = `cptzdmx`.`tzid`)  
		where cptzd.delbz=0 ".$filter;
}

    if (($sqlstr1!="")&&($sqlstr3!=""))
	{
      $sqlstr1.=" union all ".$sqlstr3;
	}
	else{

		if ($sqlstr3!="")
		{
			$sqlstr1=$sqlstr3;
		}
	}    


  if (($jclb=="其它")|| ($jclb=="")) {

 	    $filter =" and cptzd.khid<> cptzd.newkhid  and cptzd.ztbz>0 and YEAR(cptzd.tzrq)=".$ny;

    	if ($yu>0)
    	{
    			$filter .=" and MONTH(cptzd.tzrq)=".$yu;
	    }
    	if ($ri>0)
    	{
    			$filter .=" and DAYOFMONTH(cptzd.tzrq)=".$ri;
	    }
   	




    	
		if ($ckid>0)
		{
			$filter .= " and cptzd.L_id=".$ckid;
			
		}
		if ($khid>0)
    	{
    		$filter .= " and cptzd.newkhid=".$khid;
    	}

	$sqlstr3 = "SELECT '其它' as jclb
    , cptzd.newkhmc as khmc
	, cptzdmx.cpmc
    , 0 as jcsl    , 0 as jczl
    , 0 as ccsl    , 0 as cczl
    , 0 as gfsl    , 0 as gfzl
	,cptzdmx.tzsl ,cptzdmx.tzzl 
    FROM
    `wms`.`cptzd`
     INNER JOIN `wms`.`cptzdmx` 
        ON (`cptzd`.`tzid` = `cptzdmx`.`tzid`)  
		where cptzd.delbz=0 ".$filter;
}

    if (($sqlstr1!="")&&($sqlstr3!=""))
	{
      $sqlstr1.=" union all ".$sqlstr3;
	}
	else{

		if ($sqlstr3!="")
		{
			$sqlstr1=$sqlstr3;
		}
	}    


$khbz=(int)$_GET["khbz"];
$cpbz=(int)$_GET["cpbz"];
if (($khbz==1) && ($cpbz==0))
{
	$sql="select  khmc,
	sum(jcsl) as jcsl,sum(jczl) as jczl,
	sum(ccsl) as ccsl,sum(cczl) as cczl,
	sum(gfsl) as gfsl,sum(gfzl) as gfzl,
	sum(tzsl) as tzsl,sum(tzzl) as tzzl,
	sum(ccsl+jcsl+gfsl+tzsl) as sl,sum(cczl+jczl+gfzl+tzzl) as zl
	from (".$sqlstr1.") k  group by khmc ";
}
else{
	if (($khbz==0)&&($cpbz==1)){
		$sql="select  cpmc,
		sum(jcsl) as jcsl,sum(jczl) as jczl,
		sum(ccsl) as ccsl,sum(cczl) as cczl,
		sum(gfsl) as gfsl,sum(gfzl) as gfzl,
		sum(tzsl) as tzsl,sum(tzzl) as tzzl,
		sum(ccsl+jcsl+gfsl+tzsl) as sl,sum(cczl+jczl+gfzl+tzzl) as zl
		from (".$sqlstr1.") k    group by cpmc ";

	}else{
		$sql="select khmc as bz,'' as  khmc, cpmc,
		sum(jcsl) as jcsl,sum(jczl) as jczl,
		sum(ccsl) as ccsl,sum(cczl) as cczl,
		sum(gfsl) as gfsl,sum(gfzl) as gfzl,
		sum(tzsl) as tzsl,sum(tzzl) as tzzl,
		sum(ccsl+jcsl+gfsl+tzsl) as sl,sum(cczl+jczl+gfzl+tzzl) as zl
		from (".$sqlstr1.") k   group by khmc,cpmc ";
	}


}




	//	return $sql;
		$query = mysql_query($sql);
		return getjsonstoredata($query, 0);
}

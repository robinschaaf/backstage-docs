var store = {};store['en'] = {};


        $(document).ready(function () {
        
            
            index  = lunr(function () {

            

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({id:1, 
title:"CashComplete™ On-Device Software Development Kit Guide", 
body:" cashcomplete™ on-device software development kit guide the cashcomplete™ on-device software development kit (from called sdk) was first released with cashcomplete™ on-device rcs version 1.8.0. the sdk consists lib with java interfaces makes possible implement plug-ins extend change functionality cashcomplete™ on-device . to write plug-ins using sdk, need familiar with java programming language. however, sdk does use any advanced techniques so basic knowledge enough. an sdk plug-in register functionality called cashcomplete™ on-device different points time, is, start-up, user logs in, selects button select service page. when happens, plug-in called cashcomplete™ on-device given access interfaces allows interact with inner parts cashcomplete™ on-device . with sdk, extend change cashcomplete™ on-device software platform ways. this list shows just application examples sdk: implement new user login procedure using external database instead included rcs. implement new user login device, rfid tag reader. implement new deposit flow type device, example, cheque reader. monitor rcs connect existing monitoring- accounting system. disable rcs user interface use remotely controlled coin recycler. extend cashcomplete™ on-device used vendor-independent software completely new type application. compatibility notes for information cashcomplete™ on-device version sdk requires, see cashcomplete™ on-device . see cashcomplete™ on-device" });
this.add({id:2, 
title:"User license agreement for PayComplete software", 
body:" user license agreement paycomplete software read carefully the cashcomplete™ on-device software development kit provided paycomplete® 's general terms delivery. the copyright intellectual property rights current release, corrected versions thereof releases, program documentation shall remain paycomplete® . the current release shall not, prior written agreement with paycomplete® , altered modified any way whatever, including screens logotypes, combined with programs form work. the current release transferred leased party prior written agreement paycomplete® . see cashcomplete™ on-device software development kit guide" });
this.add({id:3, 
title:"CashComplete™ On-Device and SDK compatibility matrix", 
body:" cashcomplete™ on-device sdk compatibility matrix this matrix shows sdk versions compatible with cashcomplete™ on-device versions. cashcomplete™ on-device version software development kit version 3.0.0 2.0.0 3.8.0 2.1.0 3.10.0 2.1.1 3.11.0 2.2.0 3.12.2 2.2 see cashcomplete™ on-device software development kit guide" });
this.add({id:4, 
title:"SDK documentation", 
body:" sdk documentation this document gives overview sdk help started. this guide complete sdk. the javadoc api reference documentation — explains interfaces, classes, methods detail. location: sdk\\doc\\api\\index.html examples showing different ways use sdk. location: sdk\\examples\\com\\scancoin\\sdk\\examples\\ see cashcomplete™ on-device software development kit guidegetting started with jdkgetting started with eclipseinside the sdksdk examples — prerequisites" });
this.add({id:5, 
title:"Getting started with JDK", 
body:" getting started with jdk prerequisites: you jdk version 1.8 (32-bit) installed computer. you path environmental variable set point bin folder jdk installation starting tutorial. getting started with jdk includes setting directory files, implementing, compiling, installing plug-in. see cashcomplete™ on-device software development kit guidesetting up the jdk workspaceimplementing a jdk plug-incompiling a jdk plug-ininstalling a jdk plug-in" });
this.add({id:6, 
title:"Setting up the JDK workspace", 
body:" setting jdk workspace you need set directory files starting work with jdk plug-in. set jdk workspace create working directory. example: c:\\workspaces\\oj_sdk_tutorial . create following sub-folders working directory: * src * bi * lib copy sdk lib ( com.scancoin.sdk.jar ) rcs cashcomplete™ on-device program folder tools\\sdk\\lib . paste sdk lib ( com.scancoin.sdk.jar ) lib folder just created. name plug-in package, example, com.mycompany.ojsdktutorial . create directory structure src folder, based package name, example, c:\\workspaces\\oj_sdk_tutorial\\src\\com\\mycompany\\ojsdktutorial . you start implementing plug-in. see getting started with jdk" });
this.add({id:7, 
title:"Implementing a JDK plug-in", 
body:" implementing jdk plug-in you implement plug-in so called cashcomplete™ on-device start-up, showing screen saying “hello world” with continue button. the user needs click continue proceed login page. implement jdk plug-in inside ojsdktutorial folder, create new text file helloworld.java . open file text editor add package necessary imports: package com.mycompany.ojsdktutorial;\n\nimport java.util.hashmap;\n\nimport com.scancoin.sdk.oj.iojflowsession;\nimport com.scancoin.sdk.oj.iojregistrator;\nimport com.scancoin.sdk.oj.iojuimanager;\nimport com.scancoin.sdk.oj.ojtoomanyflowsexception;\nimport com.scancoin.sdk.plugin.iojflow;\nimport com.scancoin.sdk.plugin.iojplugin; create main class plug-in. it implement iojplugin interface method initialize(). public class helloworld implements iojplugin {\n void initialize(iojregistrator registrator) }\n} now implement private internal class called helloworldflow, implements interface iojflow method run(). public class helloworld implements iojplugin {\n void initialize(iojregistrator registrator) { }\n } register helloworldflow boot flow initialize method helloworld: public void initialize(iojregistrator registrator) {\n try registrator.registerbootflow(new helloworldflow());\n } catch(ojtoomanyflowsexception e) }\n} implement run() method helloworldflow . this called cashcomplete™ on-device start-up want screen saying “hello world” with continue button: we want wait user press button proceeding login page. first need define map (hashmap) with key text want show. next, need screen and, then, wait user press key: public void run(iojflowsession session) {\n hashmap<iojuimanager.ojkey, string> key =\n new string>();\n key.put(iojuimanager.ojkey.key_ok, \"continue\");\n session.getuimanager().showtextscreen(\"\", \"hello world\",\n null, key);\n session.getuimanager().waitforkey(false, 0);\n} the complete file look like this: package com.mycompany.ojsdktutorial;\n\nimport java.util.hashmap;\nimport com.scancoin.sdk.oj.iojflowsession;\nimport com.scancoin.sdk.oj.iojregistrator;\nimport com.scancoin.sdk.oj.iojuimanager;\nimport com.scancoin.sdk.oj.ojtoomanyflowsexception;\nimport com.scancoin.sdk.plugin.iojflow;\nimport com.scancoin.sdk.plugin.iojplugin;\npublic class helloworld implements iojplugin {\n public void initialize(iojregistrator registrator) try registrator.registerbootflow(new helloworldflow());\n } catch(ojtoomanyflowsexception e) }\n \n private helloworldflow iojflow run(iojflowsession session) hashmap<iojuimanager.ojkey, string> key =\n new string>();\n key.put(iojuimanager.ojkey.key_ok, \"continue\");\n session.getuimanager().showtextscreen(\"\", \"hello world\",\n null, key);\n session.getuimanager().waitforkey(false, 0);\n you start compiling plug-in. see getting started with jdk" });
this.add({id:8, 
title:"Compiling a JDK plug-in", 
body:" compiling jdk plug-in you compile plug-in convert source code instructions java. compile jdk plug-in open command prompt. naviagte project folder typing: cd c:\\workspaces\\oj_sdk_tutorial . compile plug-in typing: javac -sourcepath src -d bin -classpath lib\\com.scancoin.sdk.jar src\\com\\mycompany\\ojsdktutorial\\helloworld.java type cd bin navigate folder. pack plug-in jar file typing cf helloworld.jar com. the compiled packaged plug-in available c:\\workspaces\\oj_sdk_tutorial\\bin\\helloworld.jar you install plug-in. see getting started with jdk" });
this.add({id:9, 
title:"Installing a JDK plug-in", 
body:" installing jdk plug-in install jdk plug-in to install plug-in rcs, copy jar file memory stick (unless network access rcs). shut rcs software. open file explorer rcs locate cashcomplete™ on-device program folder, typically: c:\\cashcomplete . navigate folder data, example, c:\\cashcomplete\\data . create new folder plugins , unless plugins folder exists. copy plug-in (helloworld.jar) paste plugins folder. locate configuration file resources\\configurable\\configuration\\com.scancoin.sdk.engine . open configuration file text editor, notepad, replace content with: plugins = data\/plugins\/helloworld.jar;com.mycompany.ojsdktutorial.helloworld . start rcs. you see ‘hello world’ screen. see getting started with jdk" });
this.add({id:10, 
title:"Getting started with Eclipse", 
body:" getting started with eclipse getting started with eclipse includes setting directory files, implementing, compiling installing plug-in. see cashcomplete™ on-device software development kit guidesetting up the eclipse workspaceimplementing an eclipse plug-incompiling an eclipse plug-ininstalling an eclipse plug-in" });
this.add({id:11, 
title:"Setting up the Eclipse workspace", 
body:" setting eclipse workspace set eclipse workspace create working directory. example: c:\\workspaces\\oj_sdk_tutorial copy sdk lib ( com.scancoin.sdk.jar ) rcs cashcomplete™ on-device program folder tools\\sdk\\lib . paste sdk lib ( com.scancoin.sdk.jar ) oj_sdk_tutorial folder just created. start eclipse. in workspace launcher select working directory c:\\workspaces\\oj_sdk_tutorial . in eclipse, open workbench select file > new > java project . in project box, type ‘helloworldplugin ’ leave settings. click next . click libraries tab. click add external jars button. browse com.scancoin.sdk.jar file ( c:\\workspaces\\oj_sdk_tutorial ) select file. click finish create project. in package explorer, expand helloworldplugin project. right-click src folder select new > package . in name box, type com.mycompany.ojsdktutorial . click finish . right-click package just created select new > class . in name box, type helloworld . in interfaces box, add com.scancoin.sdk.plugin.iojplugin interface. click finish . you start implementing eclipse plug-in. see getting started with eclipse" });
this.add({id:12, 
title:"Implementing an Eclipse plug-in", 
body:" implementing eclipse plug-in you implement plug-in so called cashcomplete™ on-device start-up, showing screen saying “hello world” with continue button. the user needs click continue proceed login page. whenever eclipse gives compile error (marks with red underline), click code generated cursor there. then press ctrl + 1 select import popup-menu. implement eclipse plug-in implement private internal class called helloworldflow, implements interface iojflow method run(): private class helloworldflow implements iojflow {\n public void run(iojflowsession session) }\n} register helloworldflow boot flow initialize method helloworld: public void initialize(iojregistrator registrator) {\n try registrator.registerbootflow(new helloworldflow());\n } catch(ojtoomanyflowsexception e) }\n} implement run() method helloworldflow. this called cashcomplete™ on-device start-up want screen saying “ hello world ” with continue button. we want wait user press button proceeding normal login page. first need define map (hashmap) with key text want show, screen wait user press key: public void run(iojflowsession session) {\n hashmap<iojuimanager.ojkey, string> key =\n new string>();\n key.put(iojuimanager.ojkey.key_ok, \"continue\");\n session.getuimanager().showtextscreen(\"\", \"hello world\",\n null, key);\n session.getuimanager().waitforkey(false, 0);\n} the complete file look like this: package com.mycompany.ojsdktutorial; \n \nimport java.util.hashmap;\nimport com.scancoin.sdk.oj.iojflowsession;\nimport com.scancoin.sdk.oj.iojregistrator;\nimport com.scancoin.sdk.oj.iojuimanager;\nimport com.scancoin.sdk.oj.ojtoomanyflowsexception;\nimport com.scancoin.sdk.plugin.iojflow;\nimport com.scancoin.sdk.plugin.iojplugin;\n \npublic class helloworld implements iojplugin {\n public void initialize(iojregistrator registrator) try registrator.registerbootflow(new helloworldflow());\n } catch(ojtoomanyflowsexception e) }\n private helloworldflow iojflow run(iojflowsession session) hashmap<iojuimanager.ojkey, string> key =\n new string>();\n key.put(iojuimanager.ojkey.key_ok, \"continue\");\n session.getuimanager().showtextscreen(\"\", \"hello world\",\n null, key);\n session.getuimanager().waitforkey(false, 0);\n you start compiling plug-in. see getting started with eclipse" });
this.add({id:13, 
title:"Compiling an Eclipse plug-in", 
body:" compiling eclipse plug-in you compile eclipse plug-in convert source code instructions java. compile eclipse plug-in in package explorer, right-click helloworldplugin click export . expand java select jar file . click next . name jar file helloworld.jar . save jar file c:\\workspaces\\oj_sdk_tutorial . click finish . you install eclipse plug-in. see getting started with eclipse" });
this.add({id:14, 
title:"Installing an Eclipse plug-in", 
body:" installing eclipse plug-in install eclipse plug-in to install plug-in rcs, copy jar file memory stick (unless network access rcs). shut rcs software. open file explorer rcs locate cashcomplete™ on-device program folder, typically: c:\\cashcomplete . navigate folder data, example, c:\\cashcomplete\\data . create new folder plugins , unless plugins folder exists. copy plug-in ( helloworld.jar ) paste plugins folder. locate configuration file: resources\\configurable\\configuration\\com.scancoin.sdk.engine . open configuration file text editor, notepad, replace content with: plugins = data\/plugins\/helloworld.jar;com.mycompany.ojsdktutorial.helloworld start rcs. you see ‘hello world’ screen. see getting started with eclipse" });
this.add({id:15, 
title:"Inside the SDK", 
body:" inside sdk prerequisites compiling plug-in cashcomplete™ on-device : install java se 8 (jdk 1.8) 32-bit set environment path variable point jdk bin folder prerequisites testing plug-in cashcomplete™ on-device demo mode rcs purchase cashcomplete™ on-device license paycomplete® obtain cashcomplete™ on-device installer add-on package run demo mode paycomplete® install java jre version 1.8 (32-bit) later make sure internet explorer 11 later installed see cashcomplete™ on-device software development kit guidecompiling an sdk plug-ininstalling an sdk plug-insdk architecturesdk flowscashcomplete™ on-devicesdk managerscashcomplete™ on-devicecashcomplete™ on-devicecashcomplete™ on-devicecustom device integration" });
this.add({id:16, 
title:"Compiling an SDK plug-in", 
body:" compiling sdk plug-in when creating plug-in, need compile with java compiler, javac. the compilation converts source code instructions java.this task description assumes src folder, sdk lib ( com.scancoin.sdk.jar ) lib folder, want compile bin folder. compile sdk plug-in type: javac -sourcepath src -d bin -classpath lib\\com.scancoin.sdk.jar pathtothepluginsourcecode\\thepluginclass.java to package plug-in jar file, use program included jdk. if compiled bin folder, open folder type: jar cf myplugin.jar * see inside the sdk" });
this.add({id:17, 
title:"Installing an SDK plug-in", 
body:" installing sdk plug-in in sdk version 3.0.0 cashcomplete™ on-device scans \\ cashcomplete \\data\\plugins folder implementations ioj plug-in. the plug-ins automatically loaded unless blocked configuration com.scancoin.sdk.engine file. you place plug-in jar file want running cashcomplete™ on-device , recommend save \\ cashcomplete \\data\\plugins folder. plug-ins saved data subfolder automatically upgraded upgrade cashcomplete™ on-device . if install sdk using earlier method following applies: when upgrade cashcomplete™ on-device new version, manually copy icons cashcomplete (or orchardj)\/resources\/static\/images\/display\/default\/ folder paste cashcomplete\/resources\/static\/images\/display\/default folder new installation. cashcomplete\/resources\/static\/images\/display\/default folder paste cashcomplete (or orchardj)\/resources\/static\/images\/display\/default\/ new version, manually copy icons cashcomplete™ on-device when upgrade install sdk plug-in create folder plug-in jar file. for example, c:\\cashcomplete\\data\\plugins , assuming c:\\cashcomplete cashcomplete™ on-device installation folder. save plug-in jar file folder just created. if previous plug-in configuration, save \\ cashcomplete \\data\\plugins scanned cashcomplete™ on-device plug-ins load. optionally (earlier method), following: open \\ cashcomplete \\resources\\configurable\\configuration\\com.scancoin.sdk.engine text editor. add plug-in file specifying jar absolute relative path cashcomplete™ on-device installation folder. you type jar file path followed main class, separated semicolon. the fully qualified with package name: pathtojar;classname. edit configuration file say: plugins = data\\plugins\\myplugin.jar;thepluginclass to load plug-ins, edit file say like: plugins = data\\plugins\\myplugin.jar;thepluginclass,data\\plugins\\myplugin2.jar;thepluginclass2 . restart cashcomplete™ on-device software. see inside the sdk" });
this.add({id:18, 
title:"SDK architecture", 
body:" sdk architecture the cashcomplete™ on-device sdk consists single lib called com.scancoin.sdk.jar . the lib contains interfaces classes. does any dependencies java foundation classes included jdk. you need jdk sdk implement plug-in. a plug-in class implements interface com.scancoin.sdk.plugin.iojplugin included sdk lib. this regarded correspondence standard java main-method. cashcomplete™ on-device configuration file points plug-in packages classes loaded. for information see, installing sdk plug-in. when cashcomplete™ on-device starts, attempts load plug-in jar files create instance configured iojplugin classes. it calls initialize() method instances allow register flows. for information, see sdk the sdk lib contains packages: package description com.scancoin.sdk.oj interfaces representing entities (that is, devices, printers, receipts, users, sessions, so on.) cashcomplete™ on-device . these interfaces plug-in communicates with. com.scancoin.sdk.plugin interfaces classes party plug-in implements so cashcomplete™ on-device communicate with plug-in. com.scancoin.sdk.utils utility classes used plug-in perform common tasks. see cashcomplete™ on-device software development kit guideinside the sdk" });
this.add({id:19, 
title:"SDK flows", 
body:" sdk flows a flow sdk refers cashcomplete™ on-device calls method plug-in lets execute perform tasks continuing. the monitoring flow exception this. it runs parallel with cashcomplete™ on-device . when cashcomplete™ on-device starts, calls initialize() method configured iojplugin. to method, passes instance class implements com.scancoin.sdk.oj.iojregistrator interface. this object used plugin register flows tell cashcomplete™ on-device wants flows called. the plug-in implement class flow let iojflow (except service flows iojserviceflow). interface method called: void run(iojflowsession session). called cashcomplete™ on-device flow entered. the exits soon run() method returns, unless currently listener executes callback. in case, gets complete task exits. there different types flows registered: boot flow logged-in flow service flow monitor flow boot flow the boot flow called “idle flow” depending how used. the boot flow called start-up user logged out. used implement new login or, want control system, is, make remote controller. the path boot flow exited depends logged user. if logged-in user, goes regular cashcomplete™ on-device idle\/login flow. if user was logged in, goes select service (or plug-in logged-in flow registered). there registered boot flow. if plug-in registers than flow, multiple plug-ins exception registration first logged-in flow the logged-in flow called user logged regular idle\/login plug-in boot flow, just getting select service flow. you use logged-in flow following scenarios: you want make additional verification current user you want use logged-in flow override regular select service instead make you want service when logged-in flow exits, goes select service. if user was logged flow, idle (either normal idle\/login plug-in boot registered). there registered logged-in flow. if plug-in registers than flow, multiple plug-ins exception registration first service flow a service flow represented button select page. the called cashcomplete™ on-device user clicks button. if available service user, started automatically. unlike flows, service flow implements iojserviceflow instead iojflow.iojserviceflow provides additional methods control location, text, visibility button. you disable button (make unavailable). when service flow exits, stays select goes idle (either normal idle\/login plug-in boot registered) depending current user stay permission. monitor flow a monitor flow differs flows cashcomplete™ on-device does wait flow exit. the monitor started soon devices run parallel with flows. if exits, run() method returns throws exception. cashcomplete™ on-device restarted. a monitor flow typically used implement remote protocol communicate with monitoring tool. a monitor flow limited access interfaces methods plug-in. with exceptions, monitoring tell cashcomplete™ on-device anything. it listen happens. for information methods available monitor flow, see javadoc api method. if method accessible, exception. see inside the sdk" });
this.add({id:20, 
title:"CashComplete™ On-Device and plug-in flowchart", 
body:" cashcomplete™ on-device plug-in flowchart flowchart shows cashcomplete™ on-device standard flows plug-in flows. white flows standard cashcomplete™ on-device flows gray plug-in flows. see cashcomplete™ on-device software development kit guideinside the sdkexample plug-ins" });
this.add({id:21, 
title:"SDK managers", 
body:" sdk managers when run() method flow called, receives reference interface called iojflowsession. it plug-in access inner parts cashcomplete™ on-device . there things worth noticing flow session: every time flow entered, new instance session. the true objects retrieved flow session. even object represents physical device, new instance called again. no method flow session, any object retrieved maybe called exited. this happen create new thread flow. if method flow exited, exception immediately thrown. through flow session, retrieve manager objects responsible different aspects cashcomplete™ on-device . the interaction with cashcomplete™ on-device takes place managers, objects retrieved managers. there currently seven different managers sdk: for information managers, use for, objects retrieve them, see javadoc api. see cashcomplete™ on-device software development kit guideinside the sdksdk flows" });
this.add({id:22, 
title:"CashComplete™ On-Device sessions", 
body:" cashcomplete™ on-device sessions all main flows inside cashcomplete™ on-device sdk plug-in flows belong certain mode. every time leave flow enter new with different mode than last, session created cashcomplete™ on-device . you retrieve current mode through: iojsystemmanager.getsystemstatus() registering iojsystemstatuslisteneron iojsystemmanager. it important aware concept sessions printing standard receipts iojprinter. the deposit receipt dispense list transactions current session. this means that, just stay flow (for example. boot flow) make transactions, print transaction, see past receipt. probably intended. solution change printing. for example, want start deposit, log user exit. takes logged-in state (if registered). then state, new these constant modes plug-in flows: plug-in flow system mode boot flow idle logged-in flow user service flow user the cashcomplete™ on-device flows come plug-in different mode. this means that, flow called, new session. for example, logged-in service cashcomplete™ on-device select service flow with select_service mode. that way, sure different session than logged-in flow. none applies monitor flows. see cashcomplete™ on-device software development kit guideinside the sdksdk flows" });
this.add({id:23, 
title:"CashComplete™ On-Device permissions", 
body:" cashcomplete™ on-device permissions you use roles permissions control user access different functions cashcomplete™ on-device . each user connected role set permissions defines allowed how behave user. from programming point view, permission than string. there fixed permissions cashcomplete™ on-device knows available cashcomplete™ configuration studio . by manually editing roles.xml file, add permissions. in sdk, check permissions current user calling haspermission() onthe iojuser interface. you obtain getcurrentuser() iojusermanager. permissions used achieve different results, common use permissions decide services available select service screen. when register new sdk plug-in services, implement iojserviceflow interface .one methods isvisisble() — typical place check service. here example how isvisible() checks permission called “sdk_plugin”: public boolean isvisisble(iojflowsession session) {\n iojuser user = session.getusermanager().getcurrentuser();\n if(user == null) return false;\n }\n user.haspermission(\"sdk_plugin\");\n} see cashcomplete™ on-device software development kit guidepermissionsinside the sdk" });
this.add({id:24, 
title:"CashComplete™ On-Device operator service menu", 
body:" cashcomplete™ on-device operator service menu cashcomplete™ on-device usually service menu operator log perform tasks, resetting devices resolving errors. the appearance differs different cashcomplete™ on-device applications. in rcs, separate status window. you use keyboard alt + tab keys open window. you log with user service_mode permissions. it possible standard idle\/login state, is, waiting identify. if implemented login procedure boot flow, return standard idle important make possible log service menu. don’t, operator clear errors. when logs service menu, important close hardware devices. an out-of-use screen shown. it possible log menu user logged in. this normally allowed idle state. for sdk plug-in, solved registering operator login handler calling setoperatorloginhandler(iojoperatorloginhandler) iojusermanager. if this, it’s possible log service menu inside flow. registered handler, cashcomplete™ on-device calls handler soon tries login service menu. you decide allow log menu time. if want it, return true. then make sure close devices flow possible. the does appear exited. long exit, user experience bad. your flow called soon operator logs out, with new instance session cashcomplete™ on-device session created. see cashcomplete™ on-device software development kit guideinside the sdk" });
this.add({id:25, 
title:"Custom device integration", 
body:" custom device integration there support sdk implementing custom device handled regular cashcomplete™ on-device flows like devices handled cashcomplete™ on-device . however, sdk support using custom devices plug-in flows. for example, implement custom identification device (card reader, rfid tag finger print so on) use boot flow. information, see externallogindevice example. if want integrate custom deposit device dispense device, cheque reader note recycler supported cashcomplete™ on-device , easily implement deposit dispense flow. when end deposit dispense transaction, add result custom device. the saved with transaction included print standard receipts. the appearance depends behavior custom device. it want parallel with deposit devices sequence. complexity increases dramatically parallel. for information regular deposit dispense flows, see remotecontroller, paralleldeposit, dispensevalue examples. the example ends with endtransaction() iojdepositmanager called null parameters. if used custom device, simply create ojmoneybag result device pass first parameter endtransaction(). you second parameter, string value any like, card number. (an additional money bag string) passed dodispense() iojdispensemanager (third fourth parameters). difference counts negative case dispense. see cashcomplete™ on-device software development kit guideinside the sdksdk flows" });
this.add({id:26, 
title:"SDK troubleshooting", 
body:" sdk troubleshooting this topic lists common problems encounter links suggested solutions problems: plug-in does start there button plug-in service cashcomplete™ on-device does start iojdepositmanager.begintransaction() unresponsive see cashcomplete™ on-device software development kit guideplug-in does not seem to startthere is no button for a plug-in servicecashcomplete™ on-deviceiojdepositmanager.begintransaction() becomes unresponsivesdk documentation" });
this.add({id:27, 
title:"Plug-in does not seem to start", 
body:" plug-in does start this problem causes: if plug-in service registered flow button does appear select screen, screen full. if plug-in registered boot flow logged-in flow, problem plug-ins activated register flow. there configuration error com.scancoin.sdk.engine file. complete tasks resolve problem create different role user with fewer permissions add plug-in service permission instead. in com.scancoin.sdk.engine file, deactivate plug-in registered second boot flow logged-in flow. merge plug-ins registered flow so boot logged-in performs task plug-ins. open com.scancoin.sdk.engine file look error says “com.scancoin.sdk.engine.internal.sdkservice - sdk:” followed exception: c:\\orchardj\\trace\\orchardj_error.log see sdk troubleshooting" });
this.add({id:28, 
title:"There is no button for a plug-in service", 
body:" there button plug-in service no button appears plug-in service. the reason active services current user (role). when services registered, tries arrange submenus. if many, with submenus, service accepted. select screen full, cause. complete task resolve problem create different role user with fewer permissions add plug-in service permission instead. see sdk troubleshooting" });
this.add({id:29, 
title:"CashComplete™ On-Device does not seem to start", 
body:" cashcomplete™ on-device does start if start cashcomplete™ on-device see screen says “rcs 800” don't reach login screens boot flow, probably internet explorer 11 installed computer. complete steps resolve problem go microsoft web page download install internet explorer (ie) 11. start cashcomplete™ on-device . see sdk troubleshooting" });
this.add({id:30, 
title:"IOJDepositManager.beginTransaction() becomes unresponsive", 
body:" iojdepositmanager.begintransaction() unresponsive if deposit flow unresponsive conclude blocked begintransaction(), reason probably till inside drawer waiting user remove close drawer. you screen asking calling begintransaction(). complete task resolve problem remove till show screen asking user remove till calling begintransaction() or, demo mode, selecting box siu_vandalshield tio simulation window. see sdk troubleshooting" });
this.add({id:31, 
title:"SDK examples — prerequisites", 
body:" sdk examples — prerequisites prerequisites running examples: you jdk version 1.8 (32-bit) installed computer. you path environmental variable set point bin folder jdk installation starting tutorial. see cashcomplete™ on-device software development kit guidecompiling and installing examplesexample plug-ins" });
this.add({id:32, 
title:"Compiling and installing examples", 
body:" compiling installing examples compile install examples rcs computer. if plug-in folder does exist computer, need create it. if installed cashcomplete™ on-device different folder than c:\\cashcomplete , use installed program folder rcs installing jar. compile install examples open command prompt browse sdk folder, example, c:\\cashcomplete\\tools\\sdk . to compile package jar containing example plug-ins classes\\sdkexamples.jarype, type: mkdir classes javac -sourcepath examples -d -classpath bin\\com.scancoin.sdk.jar examples\\com\\scancoin\\sdk\\examples*.java cd classes jar cf sdkexamples.jar com to install jar rcs, copy sdkexamples.jar c:\\cashcomplete\\data\\plugins\\ folder rcs computer. open sdk configuration file text editor, notepad. if cashcomplete™ on-device installed standard folder, path configuration file is, c:\\cashcomplete\\resources\\configurable\\configuration\\com.scancoin.sdk.engine change plugins property so looks like this: plugins = data\/plugins\/sdkexamples.jar;com.scancoin.sdk.examples.xxxx . make sure # property. replace xxxx with example want activate. to examples activated time, comma separate like this: plugins = data\/plugins\/sdkexamples.jar;com.scancoin.sdk.examples.dispensevalue, data\/plugins\/sdkexamples.jar;com.scancoin.sdk.examples.paralleldeposit note able use examples time. to make sure permissions required examples role use, open c:\\cashcomplete\\resources\\configurable\\configuration\\roles.xml select role doesn’t permissions, cashcomplete™ on-device does allow services user. locate role use. add permission role like this: <permission>permission_name<\/permission> for information, see cashcomplete™ on-device permissions. see sdk examples — prerequisites" });
this.add({id:33, 
title:"Example plug-ins", 
body:" example plug-ins receiptprinter the receiptprinter complete plug-in. it’s helper class used examples (bagdropper, paralleldeposit, dispensevalue). performs following tasks: prints standard receipt does number updates user interface tells user receipt printed asks user receipt. handles errors if receiptprinter fails print receipt, shows error screen with image receipt looked like. doorhandler required permission: door_handler doorhandler simple plug-in shows door handler button select service screen . clicking displays table with micro switches machine look — doors others, like till box, current status (opened closed) switches. the doorhandler plug-in buttons navigating list doors. if currently selected door opened closed software, user interface opening closing the doorhandler example shows new door handling iojdevicemanager. how display table screen implementing iojtablemodel. the doorhandler example was introduced revision 1.4.0 replaces rcsdoorstatus, used deprecated, i\/o handling. bagdropper required permission: bag_dropper the bagdropper plug-in implements simple bag-drop flow. you scan bar code bags, enter bag, drop bag safe. repeat steps needed. when finished, click done deposit receipt printed. the bagdropper example shows how communicate with iojdropsafe iojbarcodereader. it prompt user input number. externaluserlogin the externaluserlogin example registers boot flow implements new login procedure. it uses standard cashcomplete™ on-device card reader shows start button manual login. the start button shown set enable_manual_login constant true. the externaluserlogin example doesn’t use cashcomplete™ on-device user database ( users.xml roles.xml ). instead, shows how connect custom user database. the example demonstrates using hard-coded users. the externaluserlogin example shows how communicate with iojcardreader, log users iojusermanager, prompt user id passwords (pin codes). it handle operator service menu use — checking errors registering error listener. when implementing completely new idle flow, state. externallogindevice the externallogindevice example registers boot flow implements new login procedure. this similar externaluserlogin, uses external identification device instead built-in card reader. it internal cashcomplete™ on-device user database instead external database. the external identification device rfid tag reader, finger print scanner, used user identification. in example, demonstrated with java swing window field id input button simulate number was read device. dispensevalue required permission: dispense_value the dispensevalue example shows dispense flow user doesn’t select exact mix. instead, gets enter value currency dispense. plug-in tries create mix match value. dispensed receipt printed. the algorithm used create mix was simplified earlier versions sdk. from sdk 2.0.0, built-in used. remotecontroller the remotecontroller example shows how implement remote control protocol disables user interface rcs uses controlled coin recycler. connected note devices used example. simple commands deposit. lacks large parts error handling communication. the remotecontroller example registers flows: boot flow logged-in flow. waits commands client and, command received,it logs user returns. next, takes over. performs task (the deposit). that way new session created deposit command. the remotecontroller example server class runs separate thread handles actual protocol. the example shows how implement simple deposit flow accepts coins runs device. remotecontroller simpler than paralleldeposit parallel deposits with devices. to test remote controller, use freeware program called netcat. use connect port 8888 rcs. if run rcs itself, like this: nc localhost next, enter text commands netcat rress enter send commands. the responses rcs shown separate lines. to start deposit, send command: deposit:userid:username the user id does match any users.xml. a new temporary created using name. the rcs sends status deposit intermediate updates counts coins. when completed deposit, send command: stop the rcs sends result deposit complete deposited coins returns idle. for information protocol, see actual example. just like externaluserlogin externallogindevice examples, remotecontroller example enables operator service menu waiting commands. this wouldn’t necessary complete protocol tasks remotely. paralleldeposit required permission: parallel_deposit the paralleldeposit example shows advanced deposit flow parallel different devices. user interface resembles, identical to, standard rcs flow. if compare deposit flow remotecontroller example see how complicated gets parallel deposits. the error handling careful with concurrency aspects thread synchronization. the paralleldeposit example shows how use iojdepositmanager start deposits with iojbatchdepositer iojcontinuousdepositer parallel. iojtablemodel display deposited amount. it alo handle different types deposit errors. the run() method flow fairly short shows outline flow. it calls number helper methods performs different tasks required implement custominfodeposit the custominfodeposit example demonstrates how add pre- post flow standard flows simply hi-jacking implementing — doing additional pre-step launching known flow.: in customized pre-deposit step, read current temperature (in degrees celsius, paycomplete® headquarters outside chicago) add temperature custom data deposit transaction. exchange required permission: exchange_cash the exchange example demonstrates how use possibility launch known flows create new user flow. in case, exchange function running standard deposit launching dispense requested tableeditor required permission: table:* the tableeditor example demonstrates how use new ui framework sdk 2.0.0. fore information, see new framework. example, shows permission functions cashcomplete™ on-device built-in configurations. the tableeditor plug-in shows screen with table numpad. title fetched configurations rows based permissions. with numpad, enter data and, finally, print content table. simplekiosk this simple kiosk application. it basically intended work gui vending machine. the display shows list products and, click products, prompted pay. once product paid, kiosk supplies (not actually implemented), gives change, prints receipt. the application does manage user sessions longer than purchase credits over-payments done. sessionkiosk this advanced kiosk application. the application works gui car wash starter cash exchange machine. the application gives user following options: start car wash buy tokens buy coins buy mix coins tokens recharge loyalty card in example, user starts doing following: clicking screen inserting card scanning barcode when selecting product, user logged in. after purchasing product, user remains logged purchase additional products out. this makes possible manage remaining credits purchase. if over-payment couldn’t refunded, used purchases. if user logs with credits remaining, voucher used later purchase printed. a database valid vouchers needs stored application, preferably remote server. in case, make example simple just concept, database non-persisted map memory. see sdk examples — prerequisites" });
this.add({id:34, 
title:"SDK 3.0.0 - configuration handling", 
body:" sdk 3.0.0 - configuration handling example: tableeditor when handling plugins, cashcomplete™ on-device first scans com.scancoin.sdk.engine file loads any configuration information plugins. next, cashcomplete™ on-device continues check cashcomplete \\data\\plugins folder plugin configurations. if configuration key exists places, value specified com.scancoin.sdk.engine file used. by default, com.scancoin.sdk.engine file located cashcomplete \\resources\\configurable\\configuration folder. this example configuration look like resources\\configurable\\configuration\\com.scancoin.sdk.engine file: com.mycom.myplugin.myplugin.flowtimeout = 1000 in returned properties object, called flowtimeout. this example value com.mycom.myplugin.myplugin.properties file. flowtimeout = 2000 in case, value used flow timeout 1000 that's specified com.scancoin.sdk.engine file. see cashcomplete™ on-device software development kit guidesdk documentation" });
this.add({id:35, 
title:"SDK 2.0.0", 
body:" sdk 2.0.0 the sdk version 2.0.0 was released with cashcomplete™ on-device version 3.0.0. this topic describes news sdk 2.0.0 how use them. see cashcomplete™ on-device software development kit guidesdk documentationnew user interface frameworkknown flows launching processsdk 2.0.0 - miscellaneous information" });
this.add({id:36, 
title:"New user interface framework", 
body:" new user interface framework example: tableeditor the user interface possibilities older versions sdk quite limited. you static screens (except input screens), limited just layouts. if needed advanced gui, generate complete html page use custom screen, build standard java gui (for example, swing) display frame instead cashcomplete™ on-device gui. the work was cumbersome future proof. with sdk 2.0.0, build dynamic guis cashcomplete™ on-device using layout managers way java awt swing. you use containers create swing gui, populate with special components created sdk. the basis class called ojscreen. you see jframe framework. it inherits jpanel used asa populating with components. instantiate ojscreen add components it, recommended way inherit make screen class. when populated screen, iojuimanager.showscreen() display screen. when populate screen, use standard layout manages awt swing, containers jpanel jcontainer. you add awt\/swing components like jbutton jlabel, shown cashcomplete™ on-device gui. however, size components considered doing layout — makes sense add just purposes. one difference sdk ui framework awt\/swing instantiate components directly. with exception ojscreen, classes, interfaces, components. so instead instantiating component class, need use factory interface called iojcomponentfactory. you receive instance calling iojuimanager.getcomponentfactory(). if don’t know how build gui with swing layout managers, books web pages subject. to more, read java documentation. the old, simple gui functions available. if need message screen input screen, probably efficient use than create with new framework. see sdk 2.0.0example plug-ins" });
this.add({id:37, 
title:"Known flows launching process", 
body:" known flows launching process with version 2.0.0 sdk, it’s possible launch standard cashcomplete™ on-device flows\/services sdk plugin flow. you use function build aggregated flow, add custom action standard cashcomplete™ on-device flow. you use aggregated flow, is, flow sequence standard flows, number different purposes: create completely new function, example, create exchange combination standard deposit flow dispense flow. for information, see example. force users follow certain custom process. for example, wants enforce replenishment process cit prints machine total, moves notes, empties boxes, total again. you add custom action want new standard flow, example, configure data deposit. in case, implement flow with icon hide using blockpermssion(). from launch actions after. for information, see custominfodeposit example. the main way launching standard flow calling executeknownflow() iojsystemmanager, supplying enum indicate known launch. this method going block plugin exits. using method, launch flows launched select service. contains than 50 different flows. for information, see api reference documentation ojknownflow iojsystemmanager. you can’t pass any data flows receive results. to know happened flow, need iojdatabasemanager investigate new transactions stored. a standard deposit flow launched with control. you launch method described above, optional way: iojdepositmanager called rundepositflow() blocks done. to use rundepostiflow(), need configure parameters: the transaction type use whether print receipt this method returns money bag with content was deposited. see cashcomplete™ on-device software development kit guidesdk 2.0.0" });
this.add({id:38, 
title:"SDK 2.0.0 - miscellaneous information", 
body:" sdk 2.0.0 - miscellaneous information permissions examples: custominfodeposit tableeditor previously, way check user certain permission was execute haspermission() method iojuser. however, permissions parameterized, “free_float_amount_limit:1000”, cases don’t know string use (you can’t with possible values previous example). to resolve problem, getpermissions() method was introduced. you supply prefix enabled permissions user starts with prefix. in example, “free_float_amount_limit:” for information usage, see tableeditor example. two new permission methods iojuser are: blockpermission() unblockpermission() these methods temporarily hide user's permission so appears like user doesn’t permission. this feature useful “hijacking” flow want replace standard with flow. for information custominfodeposit example, see known flows launching process. custom data example: custominfodeposit if wanted provide custom information with transaction prior sdk 2.0.0, needed supply parameter called extra data — string limited 255 characters. this was stored with transaction sent rm protocol. cashcomplete™ on-device doesn’t use extra data and, reason, usually implemented enterprise software solutions using rm protocol. cashcomplete™ on-device uses called custom data instead. custom data similarly used supply custom strings with transaction. instead providing just single string, provide map key-value pairs allows information. with sdk 2.0.0, use custom data directly sdk. the extra parameter available backwards compatibility. another difference don’t supply custom data parameter create transaction like did with extra data. instead, set user object. it used transactions created session, sdk plugin cashcomplete™ on-device . this means set custom data user logged flow used native cashcomplete™ on-device flows, used launching standard flow sdk plugin. for information, see known flows process. money mix algorithm examples: exchange dispensevalue sometimes want create optimal mix coins notes dispense certain value. at first, like easy algorithm. just highest available denomination possible, exceeding value, proceed with second-highest denomination, so on. this was how value implemented dispensevalue example prior sdk 2.0.0. the problem with algorithm that, want create mix for, example, €110 €50 notes €20 notes. in case, 2 notes, reaching €100, possibility fulfilling €10. it 1 cent coins, case dispense 1000 reached note 3 in sdk 2.0.0, built-in algorithm takes cases account available cash machine dispense limits. just createmix() iojdispensemanager supply money bag value want split. this taken just the reason convenient use bag, handles different currencies automatically. it's total (per currency) used. result split given ojmixresult. holds exact mix, mix found, best underpay overpay. overpay usually used couldn’t found. use cashcomplete™ on-device trace files example: custominfodeposit when develop software, want write trace log files program, debug developing, analyze error reports field. in sdk 2.0.0, possible plugin native cashcomplete™ on-device (that is, \/cashcomplete\/trace\/orchardj.log ). cashcomplete™ on-device uses third-party library apache called log4j write trace files. call createlogger() iojsystemmanager object type iojlogger use log cashcomplete™ on-device trace files. when createlogger(), supply sdk class using logger. this written log rows used relevant you. use cashcomplete™ on-device configurations example: tableeditor if require configurations plug-in, longer need write file format parsing configurations. instead make use cashcomplete™ on-device configuration files. the configuration file called com.scancoin.sdk.engine there. this plugin activated. you add custom configurations file simply ask sdk api configurations. call getconfiguration() iojsystemmanager properties object containing configurations belonging plugin. to determine belongs you, supply main class the fully qualified used prefix configuration file. for example, plugin class, supplied getconfiguration()), called com.mycom.myplugin.myplugin property flowtimeout, written like com.scancoin.sdk.engine : com.mycom.myplugin.myplugin.flowtimeout = 1000 in returned properties object, just called flowtimeout. see sdk 2.0.0" });
this.add({id:39, 
title:"Icons for services", 
body:" icons services with release cashcomplete™ on-device 3.0.0, contains sdk version 2.0.0, services select service screens different icons represents function. with release sdk version 3.0.0, icons provided input stream iojserviceflow2. the inputstream iojserviceflow2.geticon() method provides cashcomplete™ on-device with correct icon puts right place. the names identical provided earlier versions sdk. the method used previous version sdk works isn't convenient upgrading software using zero touch services . earlier method: customize icon service creating .png image flow. replace spaces file with underscores (what returned iojserviceflow.getname().replace(' ', '_')) + “.png”). save folder: resources\/static\/images\/display\/default . delete tmp\/templates\/theme.xml file change effect. when upgrading cashcomplete™ on-device new version, manually copy icons cashcomplete (or orchardj)\/resources\/static\/images\/display\/default\/ folder paste cashcomplete (or orchardj)\/resources\/static\/images\/display\/default folder new installation. the size recommendation icons 196*196 pixels. icon transparent background monochrome foreground. only alpha-component matters, redrawn match current theme colors. for example, icon start deposit looks like run software: the actual icon 196*196 pixels with solid rgb color (for example black; 0,0,0) fill, varying alpha (alpha opacity\/transparency). background 0 (completely transparent) main 255 opac). to make smooth, edges value 1 254. if black, looks like this: see cashcomplete™ on-device software development kit guide" });
this.add({id:40, 
title:"Purchases, payments, and kiosks", 
body:" purchases, payments, kiosks in sdk version 2.2.0 ( cashcomplete™ on-device version 3.11.0) concept purchases payments—both cash cashless—is introduced. the main purpose offer cashcomplete™ on-device platform building payment kiosks. in cashcomplete™ on-device , feature referred payconnect™ . see cashcomplete™ on-device software development kit guidesdk documentationcashcomplete™ on-devicekiosk application — workflowadvanced kiosk featurespurchase accounting" });
this.add({id:41, 
title:"CashComplete™ On-Device purchases", 
body:" cashcomplete™ on-device purchases there purchase than just deposit followed dispense change. first all, involve cashless payments, payments credit cards, debit cards loyalty cards. cashless payments credit cards, debit cards loyalty supported cashcomplete™ on-device version 3.11.0 sdk 2.2.0. you need consider following: the concept products different aspects products. the types payment acceptable certain product different price lists different payment forms whether certain product subject vat names products product groups managing vat — there than just calculating percentage. maybe products types payment subject vat. printing purchase receipts with proper information handling over-payments — customer paid products weren't delivered managing credits customer over-payments couldn’t weren't supposed refunded printing refund vouchers remaining credits reporting cashcomplete™ connect back-end purchase accounting purposes you manage cashcomplete™ on-device purchase user interface new sdk way reduces complexity writes kiosk application. the core management cashcomplete™ on-device provides improved cash exchange functionality. cash exchange seen purchase cash. see purchases, payments, and kioskssimple purchase procedure" });
this.add({id:42, 
title:"Simple purchase procedure", 
body:" simple purchase procedure a purchase consists following steps: initiate purchase ask payment deliver products mark delivered (if step 2 was successful) pay change (both over-payments products weren't delivered) end purchase (this sends events registers remaining credits) print purchase receipt in code, looks like this: the user logged entire sequence. iojpurchasemanager purchasemanager = session.getpurchasemanager();\niojproduct product purchasemanager.createproduct(\n \"my product group\",\n name\",\n new ojpricetableentry( 100, 100 ), \/\/ cash price (value: 1€, price: 1€)\n credit card price\n ) ); loyalty price\n\npurchasemanager.beginpurchase(\n currency.getinstance( \"eur\" currency purchase\n 10f );\nboolean result purchasemanager.dopayment(\n arrays.aslist( ),\n paymenttype.values() accept payment types\n iojpaymentlistener()\n {\n @override\n public void setcancelpossible( boolean cancelpossible )\n update gui\n }\n\n updatepayment( ojmoneybag paid externalpayment()\n externalpaymentaborted( abortreason reason }\n } );\n\nif ( )\n{\n add special code actually deliver product\n ...\n product.setdelivered( true, null, \"\", -1 );\n}\n\npurchasemanager.paychange();\n\npurchasemanager.endpurchase();\n\ntry\n{\n session.getdevicemanager().getprinter().printstandardreceipt(\n ojstandardreceipttype.purchase );\n}\ncatch ojprinterexception e )\n{\n}\n see cashcomplete™ on-device" });
this.add({id:43, 
title:"Kiosk application — workflow", 
body:" kiosk application — workflow you extend standard functionality add new user flows cashcomplete™ on-device creating number plug-ins. the added user flows available cashcomplete™ on-device user interface. a standard ccod flow (for information, see section cashcomplete™ on-device plug-in flowchart) custom flow kiosk application this workflow describes how build kiosk, train ticket machine vending machine, control add gui, use cashcomplete™ on-device middle-ware handle hardware facilitate purchase\/payment. when customize gui (hide standard cashcomplete™ on-device user interface), choose develop gui with technique comfortable with, html, angular, react. the examples workflow use standard swing framework. although optimal building modern gui kiosk, native java easier describe. you replace with want use. follow instructions complete kiosk application: three main classesuser interface managementmodel view controllerhow to switch over to userkiosk app see purchases, payments, and kiosksthree main classesuser interface managementmodel view controllerhow to switch over to userkiosk app" });
this.add({id:44, 
title:"Three main classes", 
body:" three main classes in any plugin write, need classes. for kiosk applications, class managing gui. example: iojplugin iojflow jframe (used managing ui) the flow registered boot start machine starts. if logged standard cashcomplete™ on-device flows logs out, want end plugin flow again. this how boot behaves. public class simplekiosk implements iojplugin\n{\n @override\n void initialize( iojregistrator registrator )\n {\n try\n registrator.registerbootflow( new simplekioskflow() );\n } catch ( exception e ) {}\n }\n}\n\npublic simplekioskflow iojflow\n{\n run( iojflowsession session simplekioskframe extends jframe\n{\n private static final long serialversionuid = 1l;\n \n simplekioskframe( super( \"simple kiosk\" ); setundecorated( true setdefaultcloseoperation( exit_on_close setextendedstate( maximized_both }\n} see kiosk application — workflow" });
this.add({id:45, 
title:"User interface management", 
body:" user interface management this example describes how replace user interface. whenever flow started, new gui displayed hiding cashcomplete™ on-device gui. the order important make sure windows desktop doesn't appear calls. the example ensures if\/when flow’s run method exits, switches cashcomplete™ on-device flow. this necessary precaution case gui hidden. if fallback exists, dead-lock machine. the added 'finally' block. public class simplekioskflow implements iojflow\n{\n @override\n void run( iojflowsession session )\n {\n simplekioskframe gui = new simplekioskframe( );\n try\n gui.setvisible( true session.getuimanager().setsystemwindowsvisible( false \n \/\/ ... implement kiosk flow\n }\n finally\n gui.dispose();\n }\n} see kiosk application — workflow" });
this.add({id:46, 
title:"Model View Controller", 
body:" model view controller model view controller (mvc) traditional architectural patterns software development. it's good principle use implementing sdk plugin using gui. you automatically end with threads (at least, case gui swing): an sdk flow thread calls run() method event dispatch thread swing you thread, called sdk event calls listeners registered. this easily complicated. the mvc pattern makes you try implement entire flow (control) application sdk thread context run()-method. gui (view) jframe class event dispatch thread. passing control threads simple using construct sdk swing. to pass gui event event dispatch thread sdk flow thread, use concept key-strokes (iojuimanager). the class method injectkey() post key-event, thread calls waitforkey() block certain key pressed.   this asynchronous notification, normally want passing notification controller prevent freezing. public class simplekioskflow implements iojflow\n{\n @override\n void run( iojflowsession session )\n {\n simplekioskframe gui = new simplekioskframe( );\n try\n gui.setvisible( true session.getuimanager().setsystemwindowsvisible( false \n ( ojkey key session.getuimanager().waitforkey( true, 0 ); \/\/ ... based got\n }\n finally\n gui.dispose();\n }\n}\n\npublic extends jframe\n{ private jbutton actionbutton jbutton( \"do something\" final ...\n actionbutton.addactionlistener( ae ) ->\n session.getuimanager().injectkey( ojkey.key_f1 } }\n} you way, sdk flow thread (the control thread) event dispatcher view with swing helper class called swingutilities. use asynchronous swingutilities.invokelater() synchronous swingutilities.invokeandwait().   for information, see: https:\/\/docs.oracle.com\/javase\/8\/docs\/api\/javax\/swing\/swingutilities.html#invokelater-java.lang.runnable- https:\/\/docs.oracle.com\/javase\/8\/docs\/api\/javax\/swing\/swingutilities.html#invokeandwait-java.lang.runnable- sdk flow thread:   gui.changebuttonname( \"i was pressed\" );\n\nin simplekioskframe:\n\npublic void changebuttonname( final string )\n{\n swingutilities.invokelater( () ->\n {\n actionbutton.settext( );\n } );\n} see kiosk application — workflow" });
this.add({id:47, 
title:"How to switch over to CashComplete™ On-Device", 
body:" how switch cashcomplete™ on-device the example shows how make application gui control machine, using cashcomplete™ on-device middleware control hardware facilitate things like purchases, payments, receipts. this mainly end customer flows screens, vending machine user interface any kiosk purpose. a needs technical administration menus refill cash dispensers, acceptance boxes, inventory, print content reports, handle errors, so on. really leverage benefit having cashcomplete™ on-device . you write application completely focus it’s core feature (vending products) use cashcomplete™ on-device functions. to so, need way switch cashcomplete™ on-device gui. switching easily returning run() method sdk flow. before doing that, need make sure authorized cashcomplete™ on-device user successfully logged. if authorized cashcomplete™ on-device user logged in, machine end limbo state. you need figure how log-in procedure initiated gui. in simplekiosk example, double-click header (the paycomplete® logo). just like model view controller example, inject key represents attempt log technical menu, ojkey.key_cancel. for information, see model view controller . private class simplekioskflow implements iojflow\n{\n @override\n public void run( iojflowsession session )\n {\n simplekioskframe gui = new simplekioskframe( );\n try\n gui.setvisible( true session.getuimanager().setsystemwindowsvisible( false \n ( ojkey key session.getuimanager().waitforkey( true, 0 == ojkey.key_cancel loginuser( ) return;\n }\n \/\/ ... handle keys functions...\n finally\n gui.dispose();\n }\n} this example calls private helper method called loginuser(). switches cashcomplete™ on-device gui shows log-in screen. it attempts log standard user cashcomplete™ on-device ’s user database. if succeeds, returns true. fails, false. this method implemented simplekiosk example. the example generic so use any kiosk implement. private boolean loginuser( iojflowsession session )\n{\n \/\/ the login procedure uses standard ccod gui, so let's here\n session.getuimanager().setsystemwindowsvisible( true );\n\n session.getusermanager().beginloginprocedure();\n try\n {\n string id = session.getuimanager().inputnumerictext(\n \"enter id\", \"\", false, 15 );\n ( != null )\n pin pin\", true, session.getusermanager().loginuser( id, }\n catch ojincorrectpasswordexception | ojusernotfoundexception e hashmap<iojuimanager.ojkey, string> tokkey =\n new string>();\n tokkey.put( iojuimanager.ojkey.key_ok, \"ok\" session.getuimanager().showtextscreen(\n \"incorrect user pin\", null, session.getuimanager().waitforkey( 5000 \n session.getusermanager().getcurrentuser() == false return false;\n true;\n finally\n session.getusermanager().endloginprocedure();\n }\n} see kiosk application — workflowmodel view controller" });
this.add({id:48, 
title:"User", 
body:" user a purchase, deposit, dispense requires user logged in. it's sufficient default anonymous in, probably want kiosk. all need surround purchase procedure with methods: session.getusermanager().logindefaultuser(); session.getusermanager().logout(); see kiosk application — workflow" });
this.add({id:49, 
title:"Kiosk app", 
body:" kiosk app you bits pieces develop kiosk app. just populate simplekioskframe with buttons different products, let send ojkey values flow thread, turn performs purchase. for information simple purchase procedure, see simple purchase procedure . you example (simplekiosk) examples folder sdk. see kiosk application — workflowsimple purchase procedure" });
this.add({id:50, 
title:"Advanced kiosk features", 
body:" advanced kiosk features if want information advanced kiosk features, read sessionkiosk example. for information, see example plug-ins . see purchases, payments, and kiosksexample plug-insover-payments and user creditscredit vouchers and redemptionsvatprice liststypes of products" });
this.add({id:51, 
title:"Over-payments and user credits", 
body:" over-payments user credits there occasions customer over-paid. reasons over-payment: the customer paid cash didn’t the customer paid cancelled the failed deliver products customer paid normally, try refund cash. after dopayment() delivery products, paychange() attempts possible. there couple things need pay attention case: call paychange() dopayment() returns false, payment needs refunded. after delivering products, make sure setdelivered() corresponding iojproduct objects, value refunded. in cases, (or amount) can’t refunded. there reasons this, example: an insufficient cash dispensers the payment form doesn’t permit refunds (only cash permits cash) you don’t permit refunds cash (in case simply skip paychange()) in cases, user credits necessary. when payment done, difference paid hand sum delivered products refunded change other, given currently logged user pending credits. this information printed receipt, reported purchase message, stored current object. for information, see credit vouchers and redemptions . if new purchase started user logged in, pending credits (and paymenttype.credits selected acceptable payment form), kiosk app tries first use payment. with following methods iojuser interface, see credits current user add remove credits: ojmoneybag getcredits();\nojmoneybag addcredits( currency currency, int credits ); \nojmoneybag removecredits( \nvoid clearcredits(); for information, see sessionkiosk example example plug-ins . the example session user kept logged purchase make purchases logging out. purpose able use credits. see advanced kiosk featurescredit vouchers and redemptionsexample plug-ins" });
this.add({id:52, 
title:"Credit vouchers and redemptions", 
body:" credit vouchers redemptions if user logged pending credits, logout() purchase simplekiosk, presses logout credits pending), lost. the purchase receipts mention credits so does back-end reporting. it difficult handle claims customers didn’t expected paid out. for reason, built-in support printing credit voucher logging user. the brought kiosk owner claim money. contains reference string (included barcode) order validate it. when registering voucher, supply used system, null let cashcomplete™ on-device generate universally unique string. after registering voucher, just print standard receipt called credits_refund voucher. iojpurchasemanager purchasemanager = session.getpurchasemanager();\npurchasemanager.givevoucher( null, -1f );\n\ntry\n{\n session.getdevicemanager().getprinter().printstandardreceipt(\n ojstandardreceipttype.credits_refund );\n}\ncatch ( ojprinterexception e )\n{\n} the second argument givevoucher -1f example above. this vat, case, expect user trade voucher cash. in vat (thus, set -1). instead having users collect cash vouchers, let redeem voucher kiosk itself time want buy something. in sense works like loyalty card. you need reference number returned givevoucher() database with credits it. when scans barcode exists database, redeem voucher remove database. cashcomplete™ on-device does maintain database you. it recommended remote server so vouchers used machines. when used way, need add vat registering voucher. the reason essentially sold credits user, just like charging loyalty card. for information, see vat . below see small example snippet. for comprehensive example, see logoutuser() setuplisteners() methods sessionkiosk example example plug-ins . the example does proper database. it just keeps simple map ram simulate when user logging out:   ojpurchasemanager purchasemanager = session.getpurchasemanager();\nstring reference purchasemanager.givevoucher( null, 25f );\n\nuserrefunddatabase.put( reference, credits );\n\ntry\n{\n session.getdevicemanager().getprinter().printstandardreceipt(\n ojstandardreceipttype.credits_refund );\n}\ncatch ( ojprinterexception e )\n{\n}\n\nsession.getusermanager().logout(); when barcode scanned: ( userrefunddatabase.containskey( barcode ) )\n{\n \/\/ check user logged in, login one\n session.getusermanager().getcurrentuser() == null )\n {\n session.getusermanager().logindefaultuser();\n }\n \n redeem voucher, adds credits current user\n int = 0;\n ojmoneybag bag userrefunddatabase.get( );\n ojmoney money : bag.getmoney() money.getcurrency().equals( currency += money.getvalue() * money.getnumberofitems() session.getpurchasemanager().redeemvoucher( barcode, currency, remove refund database\n userrefunddatabase.remove( );\n} see advanced kiosk featuresvatexample plug-ins" });
this.add({id:53, 
title:"VAT", 
body:" vat vat (value added tax) consumption tax placed product value added stage supply chain, production point sale. vat handled differently different countries. for example, united states prices normally shown excluding vat. the tax added product paid. in europe, including that is, price indicates total customer pay. report reason information needed accounting purposes printed purchase receipts.   if vat 25% price doesn't include vat, vendor add 25% price. that price x 1.25 . if price including vat $100 $80 (because adding 25% equals $100. if 25% vat included price customer pay, included 20% (1\/5) total pay. that price x 0.2 . in kiosk, tends become bit complicated. first all, add vat product paid with owner makes revenue on. for example, customer pays cash credit card. if credits, loyalty card, tokens, was credits tokens purchased. some types products exempted vat. vat usually added common products, food clothes. but customer buys cash—which essentially regarded cash exchange—no added. an example buying coins with banknotes. in case, needs owner doesn't make any revenue. the situation different owner makes commission exchange. in case, vat added part. vat added customer buys tokens charges loyalty card cash.   it complicated purchases vatable (subject vat) non-vatable products, mix coins tokens. payments with payment means, cash loyalty card. the sdk purchase manager handles complexity vat. all need indicate vatable price building lists products. for information, see price lists . you normally don’t need mention vat, case assumed vatable paid amount. but add argument indicate lower ─ 0. product cash equivalent. for 1:1 cash exchange, set vatable 0. if commission, commission amount.   for remaining credits, vat depends credits originated from. for information, see credit vouchers and redemptions . if credits originated vatable payment, cash considered vat added customer pays with credits. if credits originated from, example, payment with tokens, vat added customer pays credits. vatable credits used non-vatable credits. if print voucher, indicates vat considered vatable essentially purchased just tokens. see purchases, payments, and kiosksadvanced kiosk featuresprice listscredit vouchers and redemptions" });
this.add({id:54, 
title:"Price lists", 
body:" price lists when build list products purchase, price list. a price list contains entry payment type, is, different prices cash, loyalty card, credit\/debit card payments. if mix cash used. credit it possible   for price list entry, indicate different amounts: the net price – regarded value product, discounts. customer pay, used reporting accounting purposes. the actual price – customer actually pays product, including discounts. includes vat. for information, see vat . the vatable (optional) – actual price vat calculated. normally, exclude amount. if set price. iojproduct product = purchasemanager.createproduct(\n \"tokens\",\n \"11x $1 tokens\",\n \/\/ cash price ($1 discount buying tokens with cash):\n new ojpricetableentry(\n 1100,\n 1000 ),\n credit card (no discount):\n 1100 loyalty ) ); if instead it's cash exchange – is, buying coins include vatable set 0: iojproduct product = purchasemanager.createproduct(\n \"coins\",\n \"10x $1 coins\",\n \/\/ cash price (no commission):\n new ojpricetableentry(\n 1000, net price\n actual 0 ), vatable amount\n credit card payment allowed\n null,\n loyalty null ); see advanced kiosk featuresvat" });
this.add({id:55, 
title:"Types of products", 
body:" types products many different types products purchased kiosk supplied customer ways. one type product require signal sent low level protocol, case rs-232 bus used. another calling web service online. other different. because way cashcomplete™ on-device know technology use kiosk, need manage how products supplied. once supplied product, setdelivered() method iojproduct object indicate product delivered. there exceptions cashcomplete™ on-device manage supply products: if product cash tokens dispensed dispenser connected cashcomplete™ on-device . if product recharge loyalty card. in cases, use standard iojdispensemanager iojclosedloopcashlessdevice interfaces supply products. when setdelivered() indicate product supplied provide additional information products, example, reference dispense transaction serial number recharged loyalty card. whether products managed cashcomplete™ on-device yourself, indicate product value was supplied. for example, purchased 2 tokens, dispensed. in case changed price product, remainder refunded paychange(). for information different cases product classes, see sessionkiosk example example plug-ins . see advanced kiosk featuresexample plug-ins" });
this.add({id:56, 
title:"Purchase accounting", 
body:" purchase accounting with kiosks, important proper account reporting. this owner’s required comply with fiscal laws. when use interfaces iojpurchasemanager purchases payments, required information automatically sent cashcomplete™ connect . the machine connected information sent cashcomplete™ connect . the information exported ends. sent contains necessary details purchases, product information, payments, vat, vouchers given redeemed. if machine offline, accounting locally using sdk. in iojdatabasemanager, interface use list purchases specific period. the information contains data sent was online. all need build menus reports. you reports standard sdk service flows appear technical menu cashcomplete™ on-device . you list purchases using method iojdatabasemanager: iojpurchase[] getpurchases( date from, ); the iojpurchase interface information products, payments, vat purchase. see purchases, payments, and kiosks" });
this.add({id:57, 
title:"Revision history", 
body:" revision history this cashcomplete™ on-device software development kit revision history: revision revision remark 3.0.0 updated information icons services, sdk installation, configuration handling. 2.2.0 added purchase manager enables payments (both cash cashless) with cashcomplete™ on-device sdk. for information, see purchases, payments, and kiosks . 2.1.0 possible use cashcomplete™ on-device translation low level serial port implementation sdk possible use external libs 2.0.0 see sdk 2.0.0 description news version cashcomplete™ on-device 3.0.0 introduces icons services. 1.4. added notes transport box 1.4.0 support variants rcs 400 simplified dispense handling. deprecated concept “dispense destination” coins. new door handling supports machine types support variants i\/o boards (e.g. rcs 400 cds9) 1.3.9 added getexpectedamount() iojuser with option remaining originally set amount(s) 1.3.8 added setexpectedamount() iojuser allow setting multiple expected amounts currency 1.3.7 added getexpectedamount() setexpectedamount() iojuser allow set expected amounts user standard ccod deposit flow 1.3.6 added iojkeylistener2 support custom screens 1.3.5 unlimited iojdispensedestination added 1.3.2 iojtransaction2 added 1.3.1 transaction with additionalmoney created dodeposit cam error 138 handled correctly 1.3.0 added possibility hide cashcomplete™ on-device windows 1.2.0 added support work unit added possibility having margin left barcodes printed with ojreceipt.addbarcode() added possibility cancel iojdepositmanager.begintransaction() iojdispensemanager.dodispense() waiting till inserted\/removed. support rear access (iojoperatorloginhandler2 automatic printer selection) 1.1.1 added new transaction types (iojtransaction.ojtransactiontype)since release since release 1.10.0 cashcomplete™ on-device rcs software restriction jre 1.6.0_u11 newer was allowed removed (you run with any 1.6) 1.1.0 iojcashdevice.getdeposithandler() called monitoring flows isvisible() isenabled() service flow (but methods deposit handler called, used check type). added setlocale() resetlocale() iojsystemmanager added interface iojcashboxupdater allows updates cash box content (empty refill cassettes) deprecated printcustomreceipt() iojprinter replaced with printreceipt(). added classes ojabstractreceipt ojreceipt. added checks make sure flow, including monitoring started devices running. “extra data” added drop safe transactions added possibility present decimals inputnumber (iojuimanager) added method getstandardreceiptproperties() iojprinter. 1.0.0 first official release 0.2.1 minor updates review 0.2.0 first beta version see cashcomplete™ on-device software development kit guidesdk documentation" });

        store['en'][1]= {
        'title': "CashComplete™ On-Device Software Development Kit Guide",
        'href': 'UUID-a90722ac-fd27-8578-43bf-25ec725be647.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide"
                , 'snippet': ''
            
        };
        
        

        store['en'][2]= {
        'title': "User license agreement for PayComplete software",
        'href': 'UUID-f95b3142-bdb2-0879-4dc9-5f0daac9b0bb.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ User license agreement for PayComplete software"
                , 'snippet': ''
            
        };
        
        

        store['en'][3]= {
        'title': "CashComplete™ On-Device and SDK compatibility matrix",
        'href': 'UUID-2818c4e4-7c3e-a7a2-9a52-7769bcbf2f2f.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ CashComplete™ On-Device and SDK compatibility matrix"
                , 'snippet': ''
            
        };
        
        

        store['en'][4]= {
        'title': "SDK documentation",
        'href': 'UUID-d2936ece-4207-e9a7-4c18-02fdf9b58ec2.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK documentation"
                , 'snippet': ''
            
        };
        
        

        store['en'][5]= {
        'title': "Getting started with JDK",
        'href': 'UUID-448d6bf9-75b2-362a-4278-c415bfd6b198.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with JDK"
                , 'snippet': ''
            
        };
        
        

        store['en'][6]= {
        'title': "Setting up the JDK workspace",
        'href': 'UUID-9cdaf9cd-b405-3fd4-3756-857e1618153d.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with JDK \/ Setting up the JDK workspace"
                , 'snippet': ''
            
        };
        
        

        store['en'][7]= {
        'title': "Implementing a JDK plug-in",
        'href': 'UUID-9fc1b8c2-e957-b10b-391c-8751a2dde4f2.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with JDK \/ Implementing a JDK plug-in"
                , 'snippet': ''
            
        };
        
        

        store['en'][8]= {
        'title': "Compiling a JDK plug-in",
        'href': 'UUID-9bd9d62b-dab7-4f0f-8bff-e7575d67d5ed.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with JDK \/ Compiling a JDK plug-in"
                , 'snippet': ''
            
        };
        
        

        store['en'][9]= {
        'title': "Installing a JDK plug-in",
        'href': 'UUID-e88e8bfa-591a-6c32-3131-970e449fafc9.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with JDK \/ Installing a JDK plug-in"
                , 'snippet': ''
            
        };
        
        

        store['en'][10]= {
        'title': "Getting started with Eclipse",
        'href': 'UUID-d55347a6-a74a-871d-4e52-d5ae920984f8.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with Eclipse"
                , 'snippet': ''
            
        };
        
        

        store['en'][11]= {
        'title': "Setting up the Eclipse workspace",
        'href': 'UUID-7dc0d9cc-a870-58bd-707a-d9dc282095be.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with Eclipse \/ Setting up the Eclipse workspace"
                , 'snippet': ''
            
        };
        
        

        store['en'][12]= {
        'title': "Implementing an Eclipse plug-in",
        'href': 'UUID-d2b1e921-9643-0d47-6514-b50506884804.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with Eclipse \/ Implementing an Eclipse plug-in"
                , 'snippet': ''
            
        };
        
        

        store['en'][13]= {
        'title': "Compiling an Eclipse plug-in",
        'href': 'UUID-b71af4e8-8c9f-348f-b545-d8ab425b999f.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with Eclipse \/ Compiling an Eclipse plug-in"
                , 'snippet': ''
            
        };
        
        

        store['en'][14]= {
        'title': "Installing an Eclipse plug-in",
        'href': 'UUID-a7d5b6d7-94d7-6e45-4e73-502014e5f079.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Getting started with Eclipse \/ Installing an Eclipse plug-in"
                , 'snippet': ''
            
        };
        
        

        store['en'][15]= {
        'title': "Inside the SDK",
        'href': 'UUID-7318a2d9-4028-1f8d-f5c5-56a7166ed74d.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK"
                , 'snippet': ''
            
        };
        
        

        store['en'][16]= {
        'title': "Compiling an SDK plug-in",
        'href': 'UUID-a42da773-7b3b-0d4b-ad89-0a6fe86e2fe5.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ Compiling an SDK plug-in"
                , 'snippet': ''
            
        };
        
        

        store['en'][17]= {
        'title': "Installing an SDK plug-in",
        'href': 'UUID-e77b5766-58ad-3def-4fc8-bf97e71004ed.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ Installing an SDK plug-in"
                , 'snippet': ''
            
        };
        
        

        store['en'][18]= {
        'title': "SDK architecture",
        'href': 'UUID-c854a932-408e-e97c-bdb6-a2eb0d880e28.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ SDK architecture"
                , 'snippet': ''
            
        };
        
        

        store['en'][19]= {
        'title': "SDK flows",
        'href': 'UUID-964d2e7f-09f7-fa43-321b-b67c706e600c.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ SDK flows"
                , 'snippet': ''
            
        };
        
        

        store['en'][20]= {
        'title': "CashComplete™ On-Device and plug-in flowchart",
        'href': 'UUID-2ac7e401-fef8-9b3c-2332-ec56efd8ceb3.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ CashComplete™ On-Device and plug-in flowchart"
                , 'snippet': ''
            
        };
        
        

        store['en'][21]= {
        'title': "SDK managers",
        'href': 'UUID-7cd7ffff-cd2e-88dd-3058-e655930232f8.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ SDK managers"
                , 'snippet': ''
            
        };
        
        

        store['en'][22]= {
        'title': "CashComplete™ On-Device sessions",
        'href': 'UUID-ca45f3e6-b822-6cbb-8be8-16de54a34ca5.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ CashComplete™ On-Device sessions"
                , 'snippet': ''
            
        };
        
        

        store['en'][23]= {
        'title': "CashComplete™ On-Device permissions",
        'href': 'UUID-d722c35d-ceca-013d-c8f3-d9ba476f9919.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ CashComplete™ On-Device permissions"
                , 'snippet': ''
            
        };
        
        

        store['en'][24]= {
        'title': "CashComplete™ On-Device operator service menu",
        'href': 'UUID-cdf34923-71a5-721d-1a1f-7a1e0fc0dce6.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ CashComplete™ On-Device operator service menu"
                , 'snippet': ''
            
        };
        
        

        store['en'][25]= {
        'title': "Custom device integration",
        'href': 'UUID-c467f34c-3db9-9860-b34f-18bf1612fa7f.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Inside the SDK \/ Custom device integration"
                , 'snippet': ''
            
        };
        
        

        store['en'][26]= {
        'title': "SDK troubleshooting",
        'href': 'UUID-24f67e04-0ea1-2411-fbb4-6444c10be3be.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK troubleshooting"
                , 'snippet': ''
            
        };
        
        

        store['en'][27]= {
        'title': "Plug-in does not seem to start",
        'href': 'UUID-5061e5d4-ffa7-293a-474f-e9f827119caa.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK troubleshooting \/ Plug-in does not seem to start"
                , 'snippet': ''
            
        };
        
        

        store['en'][28]= {
        'title': "There is no button for a plug-in service",
        'href': 'UUID-5e85eb81-eb71-5334-cbce-f2f8fc9f2d29.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK troubleshooting \/ There is no button for a plug-in service"
                , 'snippet': ''
            
        };
        
        

        store['en'][29]= {
        'title': "CashComplete™ On-Device does not seem to start",
        'href': 'UUID-2689cf83-1a8d-7959-8b01-db48c94ed4f1.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK troubleshooting \/ CashComplete™ On-Device does not seem to start"
                , 'snippet': ''
            
        };
        
        

        store['en'][30]= {
        'title': "IOJDepositManager.beginTransaction() becomes unresponsive",
        'href': 'UUID-66315ac4-fbac-fdac-3760-85189928b385.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK troubleshooting \/ IOJDepositManager.beginTransaction() becomes unresponsive"
                , 'snippet': ''
            
        };
        
        

        store['en'][31]= {
        'title': "SDK examples — prerequisites",
        'href': 'UUID-901e1ea4-0868-7aae-f60a-6bedc6ecfa0d.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK examples — prerequisites"
                , 'snippet': ''
            
        };
        
        

        store['en'][32]= {
        'title': "Compiling and installing examples",
        'href': 'UUID-d06944a7-6886-3d51-e69e-390225773217.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK examples — prerequisites \/ Compiling and installing examples"
                , 'snippet': ''
            
        };
        
        

        store['en'][33]= {
        'title': "Example plug-ins",
        'href': 'UUID-ba1e99ec-4640-b4b9-0c82-2cd0bc3d569f.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK examples — prerequisites \/ Example plug-ins"
                , 'snippet': ''
            
        };
        
        

        store['en'][34]= {
        'title': "SDK 3.0.0 - configuration handling",
        'href': 'UUID-bb541365-4925-7f31-7db5-27b9902aeeac.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK 3.0.0 - configuration handling"
                , 'snippet': ''
            
        };
        
        

        store['en'][35]= {
        'title': "SDK 2.0.0",
        'href': 'UUID-83b41fe1-9cbd-ff16-c99f-02f4473d914a.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK 2.0.0"
                , 'snippet': ''
            
        };
        
        

        store['en'][36]= {
        'title': "New user interface framework",
        'href': 'UUID-d5773f11-97c2-ddc9-ef78-fed8029fd98f.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK 2.0.0 \/ New user interface framework"
                , 'snippet': ''
            
        };
        
        

        store['en'][37]= {
        'title': "Known flows launching process",
        'href': 'UUID-636c17aa-7f0d-bffe-e77c-0ffda4bd3d3c.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK 2.0.0 \/ Known flows launching process"
                , 'snippet': ''
            
        };
        
        

        store['en'][38]= {
        'title': "SDK 2.0.0 - miscellaneous information",
        'href': 'UUID-0aa70923-d132-3015-a381-2af11f2c5ef7.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ SDK 2.0.0 \/ SDK 2.0.0 - miscellaneous information"
                , 'snippet': ''
            
        };
        
        

        store['en'][39]= {
        'title': "Icons for services",
        'href': 'UUID-f5224b30-6ab9-7d7e-2758-993c7718b233.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Icons for services"
                , 'snippet': ''
            
        };
        
        

        store['en'][40]= {
        'title': "Purchases, payments, and kiosks",
        'href': 'UUID-28d0d578-3fa4-4bc2-cb29-0f487a077613.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks"
                , 'snippet': ''
            
        };
        
        

        store['en'][41]= {
        'title': "CashComplete™ On-Device purchases",
        'href': 'UUID-8398b260-6cfe-d571-f922-1cac53f59915.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ CashComplete™ On-Device purchases"
                , 'snippet': ''
            
        };
        
        

        store['en'][42]= {
        'title': "Simple purchase procedure",
        'href': 'UUID-8398b260-6cfe-d571-f922-1cac53f59915.html#UUID-1955240a-5475-3b70-cef1-423cf87e0098'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ CashComplete™ On-Device purchases \/ Simple purchase procedure"
                , 'snippet': ''
            
        };
        
        

        store['en'][43]= {
        'title': "Kiosk application — workflow",
        'href': 'UUID-7311a90b-969c-17e6-cc79-2c1844c91ce1.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Kiosk application — workflow"
                , 'snippet': ''
            
        };
        
        

        store['en'][44]= {
        'title': "Three main classes",
        'href': 'UUID-7311a90b-969c-17e6-cc79-2c1844c91ce1.html#UUID-fcb8142a-3950-6c56-fabe-479056847533'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Kiosk application — workflow \/ Three main classes"
                , 'snippet': ''
            
        };
        
        

        store['en'][45]= {
        'title': "User interface management",
        'href': 'UUID-7311a90b-969c-17e6-cc79-2c1844c91ce1.html#UUID-648343ef-3ff6-beca-9d51-2c44d04fc766'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Kiosk application — workflow \/ User interface management"
                , 'snippet': ''
            
        };
        
        

        store['en'][46]= {
        'title': "Model View Controller",
        'href': 'UUID-7311a90b-969c-17e6-cc79-2c1844c91ce1.html#UUID-a81ffe8b-1ca3-c6b9-12b6-4082f244c543'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Kiosk application — workflow \/ Model View Controller"
                , 'snippet': ''
            
        };
        
        

        store['en'][47]= {
        'title': "How to switch over to CashComplete™ On-Device",
        'href': 'UUID-7311a90b-969c-17e6-cc79-2c1844c91ce1.html#UUID-a81d5fca-68a5-8ef3-2dd1-572900d14239'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Kiosk application — workflow \/ How to switch over to CashComplete™ On-Device"
                , 'snippet': ''
            
        };
        
        

        store['en'][48]= {
        'title': "User",
        'href': 'UUID-7311a90b-969c-17e6-cc79-2c1844c91ce1.html#UUID-fcb8aba8-7829-cc50-300b-da4cd8cf99fa'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Kiosk application — workflow \/ User"
                , 'snippet': ''
            
        };
        
        

        store['en'][49]= {
        'title': "Kiosk app",
        'href': 'UUID-7311a90b-969c-17e6-cc79-2c1844c91ce1.html#UUID-1d109a23-9a18-f33b-e04a-6281383da1ed'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Kiosk application — workflow \/ Kiosk app"
                , 'snippet': ''
            
        };
        
        

        store['en'][50]= {
        'title': "Advanced kiosk features",
        'href': 'UUID-9327879b-213e-e89b-9407-e2701d5f302d.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Advanced kiosk features"
                , 'snippet': ''
            
        };
        
        

        store['en'][51]= {
        'title': "Over-payments and user credits",
        'href': 'UUID-9327879b-213e-e89b-9407-e2701d5f302d.html#UUID-ebffef3a-b6f4-2453-5a47-e923866ddf3e'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Advanced kiosk features \/ Over-payments and user credits"
                , 'snippet': ''
            
        };
        
        

        store['en'][52]= {
        'title': "Credit vouchers and redemptions",
        'href': 'UUID-9327879b-213e-e89b-9407-e2701d5f302d.html#UUID-2080826b-0bd1-5d7d-b1d9-12c4b59112c1'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Advanced kiosk features \/ Credit vouchers and redemptions"
                , 'snippet': ''
            
        };
        
        

        store['en'][53]= {
        'title': "VAT",
        'href': 'UUID-9327879b-213e-e89b-9407-e2701d5f302d.html#UUID-a42c45da-3375-0d3f-3a01-a932f0602013'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Advanced kiosk features \/ VAT"
                , 'snippet': ''
            
        };
        
        

        store['en'][54]= {
        'title': "Price lists",
        'href': 'UUID-9327879b-213e-e89b-9407-e2701d5f302d.html#UUID-db2a2524-46de-0db7-28e7-d44d5c42086e'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Advanced kiosk features \/ Price lists"
                , 'snippet': ''
            
        };
        
        

        store['en'][55]= {
        'title': "Types of products",
        'href': 'UUID-9327879b-213e-e89b-9407-e2701d5f302d.html#UUID-2aeda28b-692d-71e6-8491-9fc018f00467'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Advanced kiosk features \/ Types of products"
                , 'snippet': ''
            
        };
        
        

        store['en'][56]= {
        'title': "Purchase accounting",
        'href': 'UUID-2558a1cc-0b30-bc42-a498-0eb806eb80eb.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Purchases, payments, and kiosks \/ Purchase accounting"
                , 'snippet': ''
            
        };
        
        

        store['en'][57]= {
        'title': "Revision history",
        'href': 'UUID-8c537626-5f5c-af1d-46e8-7c6feb1edec1.html'
        
            , 'breadcrumbs': "CashComplete™ On-Device Software Development Kit Guide version 3.0.0 \/ CashComplete™ On-Device Software Development Kit Guide \/ Revision history"
                , 'snippet': ''
            
        };
        
        


            });

            $(document).trigger('search.ready');
       }); 

        
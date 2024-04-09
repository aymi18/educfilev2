<p align="center"><a href="https://www.facebook.com/profile.php?id=100090794779367&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
  <img src="https://i.postimg.cc/L6YW4zHC/IMG-20230510-192513.jpg" width="50" style="margin-right: 10px;"></a>
</p>
<h5 align="center">
🔹BotPack v1.1.9
</h5>

> 🔹Modified by 𝗬𝗮𝗻 𝗠𝗮𝗴𝗹𝗶𝗻𝘁𝗲 also known as 𝗬𝗔𝗡𝗗𝗘𝗩𝗔<br>
> 🔹File from [Disme-Project](https://github.com/D-Jukie/Disme-Bot.git) by Phạm Văn Diện also known as 𝗗-𝗝𝘂𝗸𝗶𝗲<br>
> 🔹Appstate is encrypted when the REPL starts running.<br>
> 🔹You have the option to either create your own custom commands or copy a file from a Mirai bot and paste it into this repl.<br>
> 🔹Repl is neatly organized!<br>
> 🔹Please note that some codes from Mirai may not work here. If they don't, they may need to be fixed.<br>
> 🔹This repl is equipped with beginner-friendly commands that are perfect for those starting out.<br>
> 🔹If you happen to encounter any issues or come across any undesirable commands, you can easily fix them by forking a new repl from the original.
<p align="center">
    <img align="center" alt="PNG" src="https://i.postimg.cc/Pf4TZKyJ/Media-230515-154906.gif"/>
<h1 align='center'>
🚀 What's in this Repl?
</h1></p>

- [x] usePrefix - is a new command configuration that has been modified by Yan Maglinte to provide users with a better option to disable or enable the use of a prefix.
- [x] This REPL has user-friendly commands that are designed for educational purposes. Additionally, users have the option to create their own custom commands if desired. Please note that any commands added to this repl are the responsibility of the user.
- [x] All commands available here have been enhanced and modified to increase their capabilities.

<h1 align="center">
Main Repl
</h1>

> Click on this Replit image to directly access the original Repl and check for the latest updates!

<p align="center">
  <a href="https://replit.com/@YanMaglinte/BotPack" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/RVjfM18D/Media-230515-183502.gif" width="100" /></a>
  
  <h1 align="center">
  About this repl!
  </h1>
  
> This is a simple messenger bot file that has been modified by Yan Maglinte from the MiraiV2 repository. The purpose of this repl is to maintain a friendly environment and provide educational purposes only. Any misbehaving commands added to this file will be solely your responsibility.

<p align="center">
    <img align="center" src="https://i.postimg.cc/fW1JGcJq/ezgif-com-optimize-4.gif" width="100"/>
<h1 align="center"> Starter Guide: </h1>
<details>
  <summary align="center"> 🇺🇲 [EN-US] Setup your REPL... </summary>
  
> <h6 align='center'>Here's how you can setup this Repl:<br><br>
> Please navigate to the 'config.json' file and add a name for your BOTNAME. Additionally, set a PREFIX for the bot and provide your FB_UID in the ADMINBOT. Adding your FB_UID will determine that you are the Bot Owner.<br><br>
> Here's an example on how to setup:<br></h6>
```bash
"BOTNAME": "BOT_NAME",
"PREFIX": "/",
"ADMINBOT": [
    "PASTE_YOUR_UID_HERE"
],
```
> <h6 align='center'>After configuring your settings, please paste your Facebook AppState into the appstate.json file within this REPL. Once you have done that, run the REPL immediately.</h6>
> <h5 align='center'>I have added new commands to this REPL. What should I do next?</h5>
> <h6 align='center'>As you review your command, you will notice the following:</h6>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Settings",
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align='center'>If you notice that the command does not have a "usePrefix" property, the code might not work. In such cases, you need to add a "usePrefix" property and set it to true if you want the command to require a PREFIX at the beginning, or false if you want to activate the command without using a PREFIX. Once you've done this, you'll be ready to go. By following this method, you can avoid errors effectively.</h6>
> <h5 align='center'>Now, take a look at the code below and observe the differences compared to the previous code I provided:</h5>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Setting",
  usePrefix: false,
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align='center'>In this code, a new property called "usePrefix" has been added to the "config" object and set to "false". This addition signifies that the command can now be activated without requiring the use of a prefix.</h6>
</details>




<details>
 <summary align="center">  🇻🇳 [VI] thiết lập REPL của bạn... </summary>

 > <h6 align='center'>Dưới đây là cách bạn có thể thiết lập Repl này:<br><br>
> Vui lòng điều hướng đến tệp 'config.json' và thêm tên cho BOTNAME của bạn. Ngoài ra, hãy đặt PREFIX cho bot và cung cấp fb_uid của bạn. Việc thêm FB_UID của bạn sẽ xác định rằng bạn là Chủ sở hữu Bot.<br><br>
> Sau đây là ví dụ về cách thiết lập:<br></h6>
```bash
"BOTNAME": "BOT_NAME",
"PREFIX": "/",
"ADMINBOT": [
     "PASTE_YOUR_UID_HERE"
],
```
> <h6 align='center'>Sau khi định cấu hình cài đặt của bạn, vui lòng dán Facebook AppState của bạn vào tệp appstate.json trong REPL này. Khi bạn đã hoàn thành việc đó, hãy chạy REPL ngay lập tức.</h6>
> <h5 align='center'>Tôi đã thêm các lệnh mới vào REPL này. Tôi nên làm gì tiếp theo?</h5>
> <h6 align='center'>Khi xem lại lệnh của mình, bạn sẽ nhận thấy những điều sau:</h6>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Settings",
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align='center'>Nếu bạn nhận thấy rằng lệnh không có thuộc tính "usePrefix", mã có thể không hoạt động. Trong những trường hợp như vậy, bạn cần thêm thuộc tính "usePrefix" và đặt thành true nếu bạn muốn lệnh yêu cầu PREFIX ngay từ đầu hoặc false nếu bạn muốn kích hoạt lệnh mà không sử dụng PREFIX. Một khi bạn đã làm điều này, bạn sẽ sẵn sàng để đi. Bằng cách làm theo phương pháp này, bạn có thể tránh lỗi một cách hiệu quả.</h6>
> <h5 align='center'>Bây giờ, hãy xem mã bên dưới và quan sát sự khác biệt so với mã trước đây tôi đã cung cấp:</h5>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Setting",
  usePrefix: false,
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align='center'>Trong mã này, một thuộc tính mới gọi là "usePrefix" đã được thêm vào đối tượng "config" và được đặt thành "false". Phần bổ sung này biểu thị rằng lệnh hiện có thể được kích hoạt mà không yêu cầu sử dụng tiền tố.</h6>
</details>




<details>
  <summary align="center">  🇵🇭 [PH] I-setup ang iyong REPL... </summary>
  
> <h6 align='center'>Narito kung paano mo mai-setup ang Repl na ito:<br><br>
> Mangyaring mag-navigate sa 'config.json' file at magdagdag ng pangalan para sa iyong BOTNAME. Bukod pa rito, magtakda ng PREFIX para sa bot at ibigay ang iyong FB_UID. Ang pagdaragdag ng iyong FB_UID ay matutukoy na ikaw ang May-ari ng Bot.<br><br>
> Narito ang isang halimbawa kung paano mag-setup:<br></h6>
```bash
"BOTNAME": "BOT_NAME",
"PREFIX": "/",
"ADMINBOT": [
    "PASTE_YOUR_UID_HERE"
],
```
> <h6 align='center'>Pagkatapos i-configure ang iyong mga setting, paki-paste ang iyong Facebook AppState sa appstate.json file sa loob ng REPL na ito. Kapag nagawa mo na iyon, patakbuhin kaagad ang REPL.</h6>
> <h5 align='center'>Nagdagdag ako ng mga bagong command sa REPL na ito. Ano ang susunod kong gagawin?</h5>
> <h6 align='center'>Habang sinusuri mo ang iyong command, mapapansin mo ang sumusunod:</h6>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Settings",
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align='center'>Kung napansin mong walang property na "usePrefix" ang command, maaaring hindi gumana ang code. Sa ganitong mga kaso, kailangan mong magdagdag ng property na "usePrefix" at itakda ito sa true kung gusto mong mangailangan ng PREFIX ang command sa simula, o false kung gusto mong i-activate ang command nang hindi gumagamit ng PREFIX. Kapag nagawa mo na ito, handa ka nang umalis. Sa pamamagitan ng pagsunod sa paraang ito, mabisa mong maiiwasan ang mga error.</h6>
> <h5 align='center'>Ngayon, tingnan ang code sa ibaba at obserbahan ang mga pagkakaiba kumpara sa nakaraang code na ibinigay ko:</h5>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Setting",
  usePrefix: false,
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align='center'>Sa code na ito, isang bagong property na tinatawag na "usePrefix" ang naidagdag sa object na "config" at itinakda sa "false". Ang karagdagan na ito ay nagpapahiwatig na ang command ay maaari na ngayong i-activate nang hindi nangangailangan ng paggamit ng prefix.</h6>
</details>


<details> <summary align='center'>🇸🇦🇦🇪 [AR] إعداد REPL الخاص بك ...</summary>
  
> <h6 align = 'center'> إليك كيفية إعداد هذا التحديث: <br> <br>
> يرجى الانتقال إلى ملف "config.json" وإضافة اسم لـ BOTNAME الخاص بك. بالإضافة إلى ذلك ، قم بتعيين PREFIX للروبوت وقم بتوفير FB_UID الخاص بك في ADMINBOT. ستحدد إضافة FB_UID أنك مالك البوت. <br> <br>
> فيما يلي مثال على كيفية الإعداد: <br> </h6>
```bash
"BOTNAME": "BOT_NAME",
"PREFIX": "/",
"ADMINBOT": [
    "PASTE_YOUR_UID_HERE"
],
```
> <h6 align = 'center'> بعد تكوين إعداداتك ، يرجى لصق AppState على Facebook في ملف appstate.json داخل ملف REPL هذا. بمجرد القيام بذلك ، قم بتشغيل REPL على الفور. </ h6>
> <h5 align = 'center'> لقد أضفت أوامر جديدة إلى REPL هذا. ماذا علي أن أفعل بعد ذلك؟ </ h5>
> <h6 align = 'center'> أثناء مراجعة الأمر الخاص بك ، ستلاحظ ما يلي: </ h6>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Settings",
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align = 'center'> إذا لاحظت أن الأمر لا يحتوي على خاصية "usePrefix" ، فقد لا يعمل الرمز. في مثل هذه الحالات ، تحتاج إلى إضافة خاصية "usePrefix" وضبطها على true إذا كنت تريد أن يطلب الأمر PREFIX في البداية ، أو false إذا كنت تريد تنشيط الأمر دون استخدام PREFIX. بمجرد القيام بذلك ، ستكون جاهزًا للانطلاق. باتباع هذه الطريقة ، يمكنك تجنب الأخطاء بشكل فعال. </ h6>
> <h5 align = 'center'> الآن ، ألق نظرة على الكود أدناه ولاحظ الاختلافات مقارنة بالكود السابق الذي قدمته: </ h5>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Setting",
  usePrefix: false,
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align = 'center'> في هذا الكود ، تمت إضافة خاصية جديدة تسمى "usePrefix" إلى كائن "config" وضبطها على "false". تشير هذه الإضافة إلى أنه يمكن الآن تنشيط الأمر دون الحاجة إلى استخدام بادئة. </ h6>
</details>


<details>
  <summary align="center"> 🇧🇩 [BD] আপনার REPL সেটআপ করুন...</summary>
  
> <h6 align='center'>এখানে আপনি কিভাবে এই Repl সেটআপ করতে পারেন:<br><br>
> অনুগ্রহ করে 'config.json' ফাইলে নেভিগেট করুন এবং আপনার BOTNAME এর জন্য একটি নাম যোগ করুন। অতিরিক্তভাবে, বটের জন্য একটি প্রিফিক্স সেট করুন এবং অ্যাডমিনবট-এ আপনার FB_UID প্রদান করুন৷ আপনার FB_UID যোগ করলে তা নির্ধারণ করবে যে আপনি বট মালিক৷<br><br>৷
> কিভাবে সেটআপ করতে হয় তার একটি উদাহরণ এখানে দেওয়া হল:<br></h6>
```bash
"BOTNAME": "BOT_NAME",
"PREFIX": "/",
"ADMINBOT": [
    "PASTE_YOUR_UID_HERE"
],
```
> <h6 align='center'>আপনার সেটিংস কনফিগার করার পরে, অনুগ্রহ করে এই REPL-এর মধ্যে appstate.json ফাইলে আপনার Facebook AppState পেস্ট করুন। একবার আপনি এটি সম্পন্ন করার পরে, অবিলম্বে REPL চালান৷</h6>৷
> <h5 align='center'>আমি এই REPL-এ নতুন কমান্ড যোগ করেছি। আমার পরবর্তী কি করা উচিত?</h5>
> <h6 align='center'>আপনি আপনার কমান্ড পর্যালোচনা করার সাথে সাথে আপনি নিম্নলিখিতগুলি লক্ষ্য করবেন:</h6>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Settings",
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align='center'>আপনি যদি লক্ষ্য করেন যে কমান্ডটিতে একটি "usePrefix" বৈশিষ্ট্য নেই, কোডটি কাজ নাও করতে পারে। এই ধরনের ক্ষেত্রে, আপনাকে একটি "usePrefix" প্রপার্টি যোগ করতে হবে এবং এটিকে সত্যে সেট করতে হবে যদি আপনি কমান্ডটির শুরুতে একটি প্রেফিক্সের প্রয়োজন হয়, অথবা যদি আপনি প্রিফিক্স ব্যবহার না করেই কমান্ডটি সক্রিয় করতে চান তাহলে মিথ্যা। একবার আপনি এটি সম্পন্ন করলে, আপনি যেতে প্রস্তুত হবেন। এই পদ্ধতি অনুসরণ করে, আপনি কার্যকরভাবে ত্রুটিগুলি এড়াতে পারেন৷</h6>৷
> <h5 align='center'>এখন, নীচের কোডটি একবার দেখুন এবং আমার দেওয়া আগের কোডের তুলনায় পার্থক্যগুলি লক্ষ্য করুন:</h5>
```javascript
module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Admin Setting",
  usePrefix: false,
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};
```
> <h6 align='center'>এই কোডে, "usePrefix" নামে একটি নতুন প্রপার্টি "config" অবজেক্টে যোগ করা হয়েছে এবং "false" এ সেট করা হয়েছে। এই সংযোজনটি নির্দেশ করে যে কমান্ডটি এখন একটি উপসর্গ ব্যবহার না করেই সক্রিয় করা যেতে পারে৷</h6>
</details>

> <h6>Updated on: Jun 26, 2023<br>Creation Date: June 11, 2023</h6>
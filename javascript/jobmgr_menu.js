var menuItems = [
   ["New Job","javascript:CreateJob(document.form)",url_htmlBase+"images/molecule.gif","","Create new job","_top",,],
   ["|Create New Job","javascript:CreateJob(document.form)","","","Create new job","_top",,],
   ["|Import Job","import_job.cgi","","","Import job","_top",,],
   ["-","","","","",,,],
   ["Refresh","javascript:Refresh(document.form)",url_htmlBase+"images/refresh.gif","","Refresh",,,],
   ["-","","","","",,,],
   ["Download","javascript:Download(document.form)",url_htmlBase+"images/download.gif","","Download selected jobs",,,],
   ["|Job Archive","javascript:Download(document.form)","","","Download archive",,,],
   ["|Spreadsheet","javascript:Spreadsheet(document.form)","","","Spreadsheet summary",,,],
   ["|HTML Export","javascript:ExportJobs(document.form)","","","Download HTML job results",,,],
   ["-","","","","",,,],
   ["Move To","",url_htmlBase+"images/move_to.gif","","Move selected jobs to folder",,,],
   ["-","","","","",,,],
   ["Delete","javascript:Delete(document.form)",url_htmlBase+"images/delete.gif","","Delete selected jobs",,,],
   ["-","","","","",,,],
   ["Utilities","edituser.cgi",url_htmlBase+"images/edit.gif","","Edit profile","_top",,],
   ["|Edit Profile","edituser.cgi","","","Edit profile","_top",,],
   ["|Edit Job Templates","edit_templates.cgi","","","Edit job templates","_top",,],
   ["|Rename","javascript:Rename(document.form)","","","Rename selected job",,,],
   ["|Help","javascript:Help()","","","Help",,,],
   ["|About WebMO","about.cgi","","","About WebMO","_top",,],
   ["-","","","","",,,],
   ["Logout","javascript:Logout()",url_htmlBase+"images/logout.gif","","Logout",,,],
];

if (typeof Array.prototype.splice == "undefined") {
  Array.prototype.splice = function(offset, length) {
    var temp = [];
    for (var i = this.length - 1; i >= 0; i--) {
      if (i < offset || i > (offset + length - 1)) {
        temp[temp.length] = this[i];
      }
      this.length--;
    }
    for (i = temp.length - 1; i >= 0; i--) {
      this[this.length] = temp[i];
    }
  }
}

if (!pro) menuItems.splice(8,2);
if (!pro) menuItems.splice(15,1);

for (var i = 0; i < folderArray.length; i++)
{
	var icon = url_htmlBase+"images/folder.gif";
	if (folderArray[i][0] == "Inbox") icon = url_htmlBase+"images/inbox.gif";
	if (folderArray[i][0] == "Trash") icon = url_htmlBase+"images/trash.gif";
	var base = pro ? 12 : 10;
	menuItems.splice(base+i, 0, ["|"+folderArray[i][0],"javascript:MoveTo(document.form,"+folderArray[i][1]+")",icon,"","","_top",,]);
}

apy_init();

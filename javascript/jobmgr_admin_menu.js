var menuItems = [
   ["Import Job","import_job_admin.cgi",url_htmlBase+"images/molecule.gif","","Import job","_top",,],
   ["-","","","","",,,],
   ["Refresh","javascript:Refresh(document.form)",url_htmlBase+"images/refresh.gif","","Refresh",,,],
   ["-","","","","",,,],
   ["Download","javascript:Download(document.form)",url_htmlBase+"images/download.gif","","Download selected jobs",,,],
   ["|Job Archive","javascript:Download(document.form)","","","Download archive",,,],
   ["|Spreadsheet","javascript:Spreadsheet(document.form)","","","Spreadsheet summary",,,],
   ["|HTML Export","javascript:ExportJobs(document.form)","","","Download HTML job results",,,],
   ["-","","","","",,,],
   ["Move To","javascript:Chown(document.form)",url_htmlBase+"images/move_to.gif","","Move selected jobs to a new user or folder",,,],
   ["|User...","javascript:Chown(document.form)",url_htmlBase+"images/username.gif","","Move selected jobs to a new user",,,],
   ["-","","","","",,,],
   ["Copy To","javascript:Copy(document.form)",url_htmlBase+"images/copy.gif","","Copy selected jobs to a new user",,,],
   ["-","","","","",,,],
   ["Delete","javascript:Delete(document.form)",url_htmlBase+"images/delete.gif","","Delete selected jobs",,,],
   ["-","","","","",,,],
   ["Rename","javascript:Rename(document.form)",url_htmlBase+"images/edit.gif","","Rename selected job",,,],
   ["-","","","","",,,],
   ["Return to Admin","javascript:ReturnToAdmin()",url_htmlBase+"images/logout.gif","","Return to administrative homepage",,,],
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

for (var i = 0; i < folderArray.length; i++)
{
	var icon = url_htmlBase+"images/folder.gif";
	if (folderArray[i][0] == "Inbox") icon = url_htmlBase+"images/inbox.gif";
	if (folderArray[i][0] == "Trash") icon = url_htmlBase+"images/trash.gif";
	menuItems.splice(11+i, 0, ["|"+folderArray[i][0],"javascript:MoveTo(document.form,"+folderArray[i][1]+")",icon,"","","_top",,]);
}
if (!pro) menuItems.splice(6,2);

apy_init();

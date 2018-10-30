var myDB;

$(document).ready(function () {


    //Open Database Connection
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        myDB = window.sqlitePlugin.openDatabase({ name: "mySQLite.db", location: 'default' });

        myDB.transaction(function (transaction) {
            transaction.executeSql('CREATE TABLE IF NOT EXISTS phonegap_pro (id integer primary key, title text, desc text)', [],
                function (tx, result) {
                    alert("Table created successfully");
                },
                function (error) {
                    alert("Error occurred while creating the table.");
                });
        });
    }
});

class SqLiteDao {
    //Insert New Data
    InsertEvento(title,desc) {
        myDB.transaction(function (transaction) {
            var executeQuery = "INSERT INTO phonegap_pro (title, desc) VALUES (?,?)";
            transaction.executeSql(executeQuery, [title, desc]
                , function (tx, result) {
                    alert('Inserted');
                },
                function (error) {
                    alert('Error occurred');
                });
        });
    };

    //Display Table Data
    SelectEventos() {
        myDB.transaction(function (transaction) {
            transaction.executeSql('SELECT * FROM phonegap_pro', [], function (tx, results) {
                /*var len = results.rows.length, i;
                $("#rowCount").html(len);
                for (i = 0; i < len; i++) {
                    $("#TableData").append("<tr><td>" + results.rows.item(i).id + "</td><td>" + results.rows.item(i).title + "</td><td>" + results.rows.item(i).desc + "</td><td><a href='edit.html?id=" + results.rows.item(i).id + "&title=" + results.rows.item(i).title + "&desc=" + results.rows.item(i).desc + "'>Edit</a> &nbsp;&nbsp; <a class='delete' href='#' id='" + results.rows.item(i).id + "'>Delete</a></td></tr>");
                }*/
                return results;
            }, null);
        });
    };

    //Delete Data from Database
    DeleteEvento(id){
        myDB.transaction(function (transaction) {
            var executeQuery = "DELETE FROM phonegap_pro where id=?";
            transaction.executeSql(executeQuery, [id],
                //On Success
                function (tx, result) { alert('Delete successfully'); },
                //On Error
                function (error) { alert('Something went Wrong'); });
        });
    };


    //Delete Tables
    UpdateEvento(id,title,desc)  {
        myDB.transaction(function (transaction) {
            var executeQuery = "UPDATE phonegap_pro SET title=?, desc=? WHERE id=?";
            transaction.executeSql(executeQuery, [title, desc, id],
                //On Success
                function (tx, result) { alert('Updated successfully'); },
                //On Error
                function (error) { alert('Something went Wrong'); });
        });
    };
}





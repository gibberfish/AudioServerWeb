
net stop "Apache Tomcat 7.0 Tomcat7"

del %CATALINA_HOME%\webapps\AudioServerWeb.war
rmdir /S /q %CATALINA_HOME%\webapps\AudioServerWeb
copy target\AudioServerWeb.war %CATALINA_HOME%\webapps\

net start "Apache Tomcat 7.0 Tomcat7"

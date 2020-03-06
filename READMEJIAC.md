From now on (6:th of March) we have two databases:
1) One called databas.db that IS NOT handled by git anymore
2) One called template.db that IS handld by git.
3) When we make important structural changes or add good dummy data we do it in template.db
   and inform the team member.
4) It is each team members responsibility to copy the template.db and rename the copy databas.db
   to get these changes.
5) Tip! Turn off your server before trying to copy template.db!!!
   a) Turn off the server (Ctrl + C in your terminal)
   b) Erase databas.db
   c) Copy template.db and rename the copy databas.db
   d) Turn on your server (npm start www -port).

6) You only need to do this after you made changes to template.db

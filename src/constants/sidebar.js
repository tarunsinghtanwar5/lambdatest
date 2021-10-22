import dashboard from '../assets/dashboard.svg'
import realtime from '../assets/realtime.svg'
import robot from '../assets/robot.svg'
import integration from '../assets/integration.svg'
import issuetracker from '../assets/issuetracker.svg'
import browser from '../assets/browser.svg'
import projects from '../assets/projects.svg'
import testlogs from '../assets/testlogs.svg'
import visual from '../assets/visual.svg'
 export const SIDEBAR_DATA = [
 
	{
		label: 'Dashboard',
     logo: dashboard,
    url:'/dashboard',
		children: null
	},
   {
     label: 'Real Time Testing',
     logo: realtime,
     url: '/realtime',
     children: null
   },

	{
		label: 'Automation',
    logo: robot,
    url: '/automation',
		children: null
	},
   {
     label: 'LT Browser',
     logo: browser,
     url: '/automation',
     children: null
   },
   {
     label: 'Visual UI Testing',
     logo: visual,
     url: '/automation',
     children: [
       {
         label: 'Screenshot'
       },
       {
         label: 'Responsive'
       },
       {
         label: 'Smart Testing'
       }
     ]
   },
   {
     label: 'Test Logs',
     logo: testlogs,
     url: '/automation',
     children: null
   },
   {
     label: 'Issue Tracker',
     logo: issuetracker,
     url: '/automation',
     children: null
   },
   {
     label: 'Integrations',
     logo: integration,
     url: '/automation',
     children: null
   },
   {
     label: 'Projects',
     logo: projects,
     url: '/automation',
     children: null
   }
];

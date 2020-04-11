<script>
	import DATA from './types/data'
	import Navbar from './components/navbar.svelte'
	import Banner from './components/banner.svelte'
	import Education from './components/education.svelte'
	import Working from './components/working.svelte'
	import Project from './components/project.svelte'
</script>

<Navbar navlists={DATA.Navbar_data} header={DATA.Header} />

<Banner bannerData={DATA.Home_data} />

<Education educationData={DATA.Education_data} />

<Working workingData={DATA.Working_data} />
<Project />
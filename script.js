function templateTags(tags) {
	const allTags = [...tags].sort().map(tag => `<span class="tag">${tag}</span> `)
	return `<span class="all selected">Tous</span> ${allTags.join(" ")}`
}

function templateExperience(experience) {
	let link = ""
	if (experience.link) {
		link = `
			<a href="${experience.link}" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" /></svg>
			</a>
		`
	}

	let references = ""
	if (experience.references) {
		const allRreferences = experience.references.map(reference => `<div><b>${reference.name}</b> : ${reference.message}</div>`)
		references = `<div class="references">${allRreferences.join()}</div>`
	}

	return `
		<div class="bloc ${experience.tags.join(" ")}">
			<div class="firstLine">
				<h2>${experience.project ? experience.project + " - " : ""}${experience.title}</h2>
				${link}
			</div>
			<div class="infos">${Object.values(experience.infos).join(", ")}</div>
			<div class="details">${experience.details.join("<br />")}</div>
			${references}
			<div class="tags">
					<span>${experience.tags.join("</span> <span>")}</span>
			</div>
		</div>
	`
}

function filterExperiences() {
	$("#list .bloc").each(function () {
		const className = $(this)[0].className
		if ([...selectedClasses].every(v => className.includes(v))) {
			$(this).removeClass("hidden")
		} else {
			$(this).addClass("hidden")
		}
	})
}

function main() {
	$("#logo").remove()
	$("#main").removeClass("loading")
	$("#hero, #experience").removeClass("hidden")

	for (const experience of experiences) {
		for (const tag of experience.tags) {
			tags.add(tag)
		}

		$("#list").append(templateExperience(experience))
	}

	$("#tags").append(templateTags(tags))

	$("#tags .all").click(function () {
		selectedClasses.clear()
		$("#tags .tag").removeClass("selected")
		$(this).addClass("selected")
		filterExperiences()
	})

	$("#tags .tag").click(function () {
		if (selectedClasses.has($(this).text())) {
			selectedClasses.delete($(this).text())
			$(this).removeClass("selected")
			if (selectedClasses.size === 0) {
				$("#tags .all").addClass("selected")
			}
			filterExperiences()
		} else {
			selectedClasses.add($(this).text())
			$(this).addClass("selected")
			$("#tags .all").removeClass("selected")
			filterExperiences()
		}
	})
}

const selectedClasses = new Set()
const tags = new Set()

$(function () {
	setTimeout(() => {
		$("#logo").addClass("animate__fadeOut")
		setTimeout(() => {
			main()
		}, 1000)
	}, 1000)
})

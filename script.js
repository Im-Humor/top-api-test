const img = document.querySelector("img");

fetch(
	"https://api.giphy.com/v1/gifs/translate?api_key=QeiLrF82EiX78ULqTliKS3I3eJC0s5fn&s=cats",
	{
		mode: "cors",
	}
)
	.then((response) => {
		return response.json();
	})
	.then((response) => {
		img.src = response.data.images.original.url;
	});

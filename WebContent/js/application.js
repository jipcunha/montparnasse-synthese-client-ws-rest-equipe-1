function chargerPersonnes() {
	$.getJSON("http://localhost:8080/ProjetEjbWs/service/personnes", function(data) {
		$("#tableBody").html("");
		
		for(i in data) {
			$tr = $("<tr>");
			
			$td = $("<td>").append(data[i]['id']);$tr.append($td);
			$td = $("<td>").append(data[i]['nom']);$tr.append($td);
			$td = $("<td>").append(data[i]['prenom']);$tr.append($td);
			$td = $("<td>").append(data[i]['age']);$tr.append($td);
			
			
			$("#tableBody").append($tr);
		}
	})
}

package com.redhat.virtualsummit.hackathon.model;

import java.util.Map;

public class Team {

	private String teamName;

	private String reindeerName;

	private Map<String, String> nameEmailMap;

	public String getTeamName() {
		return teamName;
	}

	public String getReindeerName() {
		return reindeerName;
	}

	public Map<String, String> getNameEmailMap() {
		return nameEmailMap;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public void setReindeerName(String reindeerName) {
		this.reindeerName = reindeerName;
	}

	public void setNameEmailMap(Map<String, String> nameEmailMap) {
		this.nameEmailMap = nameEmailMap;
	}

	@Override
	public String toString() {
		return "Team [teamName=" + (teamName != null ? teamName : "(not-provided)") + ", reindeerName="
				+ (reindeerName != null ? reindeerName : "(not-provided)") + ", nameEmailMapSize="
				+ (nameEmailMap != null ? nameEmailMap.size() : "0") + "]";
	}

}

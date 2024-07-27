import React from "react";
import logo from "../assets/ShrimayeeMishraLogo.png";
import LongSearchBar from "../Components/longSearchBar";
import PromptBox from "../Components/promptbox";

const SearchPage = () => {
  return (
    <div className="searchpage bg-[#D3F4FF] pb-4" id="searchpage">
      <div className="firstline flex flex-row justify-start pt-8">
        <div className="logo w-1/4 md:w-1/5 lg:w-1/6 xl:w-2/12">
          <a href="#logo">
            <img src={logo} />
          </a>
        </div>
        <LongSearchBar />
      </div>

      <div className="flex flex-col">
        <PromptBox
          link="https://medium.com/@shrimayeemishra"
          p1="Who is Shrimayee Mishra?"
          p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non erat id ipsum molestie iaculis. Mauris quis turpis in ex egestas euismod. Integer porta ipsum gravida magna aliquet, sed posuere nisi congue. Donec vel urna lacinia, mattis nisi sit amet, aliquet ex. Curabitur egestas turpis felis, non pellentesque erat luctus et."
        />
        <PromptBox
          link="https://medium.com/@shrimayeemishra"
          p1="What is Shrimayee Mishra’s Education Qualifications?"
          p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non erat id ipsum molestie iaculis. Mauris quis turpis in ex egestas euismod. Integer porta ipsum gravida magna aliquet, sed posuere nisi congue. Donec vel urna lacinia, mattis nisi sit amet, aliquet ex. Curabitur egestas turpis felis, non pellentesque erat luctus et."
        />
        <PromptBox
          link="https://medium.com/@shrimayeemishra"
          p1="What skills does Shrimayee Mishra possess?"
          p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non erat id ipsum molestie iaculis. Mauris quis turpis in ex egestas euismod. Integer porta ipsum gravida magna aliquet, sed posuere nisi congue. Donec vel urna lacinia, mattis nisi sit amet, aliquet ex. Curabitur egestas turpis felis, non pellentesque erat luctus et."
        />
        <PromptBox
          link="https://medium.com/@shrimayeemishra"
          p1="What Projects did Shrimayee Mishra implement?"
          p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non erat id ipsum molestie iaculis. Mauris quis turpis in ex egestas euismod. Integer porta ipsum gravida magna aliquet, sed posuere nisi congue. Donec vel urna lacinia, mattis nisi sit amet, aliquet ex. Curabitur egestas turpis felis, non pellentesque erat luctus et."
        />
        <PromptBox
          link="https://medium.com/@shrimayeemishra"
          p1="How do I contact Shrimayee Mishra?"
          p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non erat id ipsum molestie iaculis. Mauris quis turpis in ex egestas euismod. Integer porta ipsum gravida magna aliquet, sed posuere nisi congue. Donec vel urna lacinia, mattis nisi sit amet, aliquet ex. Curabitur egestas turpis felis, non pellentesque erat luctus et."
        />
      </div>
    </div>
  );
};

export default SearchPage;

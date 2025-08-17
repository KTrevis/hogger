import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { Quest } from "wow/wotlk/std/Quest/Quest";
import { translate } from "../../../utils/translation";
import { MATHIAS_BARRELBEARD } from "../../../npc/elwynn/goldshire/mathias-barrelbeard";
import { AreaIDs } from "../../../utils/AreaIDs";
import { NOGGENFOGGER_ELIXIR } from "../../../items/noggenfogger";

namespace Translation {
  export function english(quest: Quest) {
    quest.Name.enGB
      .set("The Alchemist's Brew")
      .ObjectiveText.enGB.set(
        "Collect 5 Silverleaf and 5 Peacebloom for the Goldshire alchemist-brewmaster."
      )
      .PickupText.enGB.set(
        "Ah, greetings there, young one! *hiccup* I'm Mathias Barrelbeard, and I practice both the noble arts of alchemy and brewing! You see, the two crafts aren't so different - both require precision, the finest ingredients, and a deep understanding of how herbs interact with each other. Today, I need your help gathering ingredients for my special elixirs. Some folk think brewing is just for tavern ales, but a true master knows that fermented herb extracts make the most potent healing potions! Could ye help an old dwarf gather 5 Silverleaf and 5 Peacebloom? I'll use them to create both refreshing ales for the tavern AND powerful elixirs for adventurers like yourself!"
      )
      .CompleteText.enGB.set(
        "By my beard, you've done it! *takes a deep sniff* Aye, these herbs smell perfect! With these beauties, I can craft both ales and alchemical elixirs. The brewing process actually enhances the herbs' magical properties - that's the secret most alchemists don't know! Here are some of my finest elixirs as reward, each one brewed with the same care I put into my finest ales!"
      )
      .IncompleteText.enGB.set(
        "Still gathering those herbs for my alchemical brews, are ye? I need 5 Silverleaf and 5 Peacebloom to create both my ales and my healing elixirs. The art of alchemical brewing waits for no one!"
      );
  }

  export function french(quest: Quest) {
    quest.Name.frFR
      .set("Le Brassin de l'Alchimiste")
      .ObjectiveText.frFR.set(
        "Collectez 5 Feuillargent et 5 Pacifique pour l'alchimiste-brasseur de Goldshire."
      )
      .PickupText.frFR.set(
        "Ah, salutations mon brave ! *hoquet* Je suis Mathias Barbe-de-Tonneau, et je pratique les nobles arts de l'alchimie et du brassage ! Voyez-vous, ces deux métiers ne sont pas si différents - tous deux requièrent de la précision, les meilleurs ingrédients, et une compréhension profonde de l'interaction entre les herbes. Aujourd'hui, j'ai besoin de votre aide pour rassembler des ingrédients pour mes élixirs spéciaux. Certains pensent que le brassage ne sert qu'aux bières de taverne, mais un vrai maître sait que les extraits d'herbes fermentées font les potions de soins les plus puissantes ! Pourriez-vous aider un vieux nain à rassembler 5 Feuillargent et 5 Pacifique ? Je les utiliserai pour créer à la fois des bières rafraîchissantes pour la taverne ET de puissants élixirs pour les aventuriers comme vous !"
      )
      .CompleteText.frFR.set(
        "Par ma barbe, vous avez réussi ! *renifle profondément* Oui, ces herbes sentent parfaitement bon ! Avec ces merveilles, je peux créer à la fois des bières et des élixirs alchimiques. Le processus de brassage renforce en fait les propriétés magiques des herbes - c'est le secret que la plupart des alchimistes ignorent ! Voici quelques-uns de mes meilleurs élixirs en récompense, chacun brassé avec le même soin que je mets dans mes meilleures bières !"
      )
      .IncompleteText.frFR.set(
        "Vous cueillez toujours ces herbes pour mes brassins alchimiques ? Il me faut 5 Feuillargent et 5 Pacifique pour créer à la fois mes bières et mes élixirs de soins. L'art du brassage alchimique n'attend personne !"
      );
  }
}

export const HERB_COLLECTION_QUEST = std.Quests.create(
  MODULE_NAME,
  "herb-collection-goldshire"
);

HERB_COLLECTION_QUEST.Objectives.Item.add(765, 5)
  .Objectives.Item.add(2447, 3)
  .MinLevel.set(5)
  .QuestLevel.set(8)
  .Rewards.Difficulty.set(5)
  .Rewards.Money.set(300) // 3 silver
  .AreaSort.set(AreaIDs.ELWYNN)
  .Questgiver.addCreatureBoth(MATHIAS_BARRELBEARD.ID);

HERB_COLLECTION_QUEST.Rewards.Item.add(NOGGENFOGGER_ELIXIR.ID, 5)
  .Rewards.ChoiceItem.add(2457, 3) // 4 agility elixir
  .Rewards.ChoiceItem.add(2458, 3) //27 max health elixir
  .Rewards.ChoiceItem.add(5997, 3) // 10 armor elixir
  .Rewards.ChoiceItem.add(2454, 3); // 4 strength elixir

translate(HERB_COLLECTION_QUEST, {
  enGB: Translation.english,
  frFR: Translation.french,
});
